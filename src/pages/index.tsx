import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { useIndex } from '../data/hooks/pages/useIndex.page';
import { PostList } from '../ui/components/PostList/PostList';

const Home: NextPage = () => {
    const { posts } = useIndex();

    return (
        <>
            <Head>
                <title>TreinaBlog</title>
            </Head>

            <main>
                <PostList posts={posts} />
            </main>
        </>
    );
};

export default Home;
