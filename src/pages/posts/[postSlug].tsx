import { GetServerSidePropsContext, NextPage } from 'next';
import { BlogPost } from '../../data/@types/BlogPostInterface';
import { ApiService } from '../../data/services/ApiService';
import PostBody from '../../ui/components/PostBody/PostBody';

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const slug = context.params?.postSlug;

    const posts = await ApiService.get<BlogPost[]>('posts');
    const post = posts.data.find(post => post.slug === slug);

    if (!post) {
        return { notFound: true };
    }

    return { props: { post } };
}

const MeuPost: NextPage<{ post: BlogPost }> = ({ post }) => {
    return <PostBody post={post} />;
};

export default MeuPost;
