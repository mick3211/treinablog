import Link from 'next/link';
import type { BlogPost } from '../../../data/@types/BlogPostInterface';
import { ListItemStyled, ListStyled } from './PostList.styled';

interface PostListProps {
    posts: BlogPost[];
}

interface PostListItemProps {
    post: BlogPost;
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <ListStyled>
            {posts.map(post => (
                <PostListItem key={post.id} post={post} />
            ))}
        </ListStyled>
    );
};

export const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
    return (
        <Link href={`posts/${post.slug}`}>
            <a>
                <ListItemStyled>
                    <img src={post.picture} alt={post.title} />
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </ListItemStyled>
            </a>
        </Link>
    );
};
