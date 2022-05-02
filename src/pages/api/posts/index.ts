import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import type { BlogPost } from '../../../data/@types/BlogPostInterface';
import { getSession } from 'next-auth/react';

const PostsApis = axios.create({
    baseURL: 'http://localhost:3002/api/posts',
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
        case 'POST':
            return handlePost(req, resp);
        case 'PUT':
            return handlePut(req, resp);
        default:
            resp.status(405).json({ error: 'Method not allowed' });
    }
}

async function handleGet(req: NextApiRequest, resp: NextApiResponse) {
    const posts = await PostsApis.get('/');
    resp.status(200).json(posts.data);
}

async function handlePost(req: NextApiRequest, resp: NextApiResponse) {
    const newPost: BlogPost = req.body.data;
    newPost.slug = newPost.title
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/[^\w-]+/g, '');
    const createdPost = await PostsApis.post('/', newPost);
    resp.status(200).json(createdPost.data);
}

async function handlePut(req: NextApiRequest, resp: NextApiResponse) {
    const newPost: BlogPost = req.body.data;

    await PostsApis.put('/', newPost, {
        params: {
            id: newPost.id,
        },
    });
    resp.status(200).end();
}
