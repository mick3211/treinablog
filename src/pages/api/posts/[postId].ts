import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import type { BlogPost } from '../../../data/@types/BlogPostInterface';
import { getSession } from 'next-auth/react';

const PostsApis = axios.create({
    baseURL: 'http://loaclhost:3002/api/posts',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default async function (req: NextApiRequest, resp: NextApiResponse) {
    const session = await getSession({ req });
    if (!session && req.method !== 'GET') {
        resp.status(401).send({ error: 'Unauthorized' });
        return;
    }
    switch (req.method) {
        case 'GET':
            return handleGet(req, resp);
        case 'DELETE':
            return handleDelete(req, resp);
    }
}

async function handleGet(req: NextApiRequest, resp: NextApiResponse) {
    const post = await PostsApis.get<BlogPost>('/', {
        params: {
            id: req.query.postId,
        },
    });

    if (post.data) {
        resp.status(200).json(post.data);
    } else {
        resp.status(404).send({ error: 'Post not found' });
    }
}

async function handleDelete(req: NextApiRequest, resp: NextApiResponse) {
    await PostsApis.delete('/', {
        params: {
            id: req.query.postId,
        },
    });

    resp.status(200).end();
}
