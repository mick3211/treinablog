import { BlogPost } from '../../../data/@types/BlogPostInterface';
import {
    PostContainer,
    PostContent,
    PostPicture,
    PostTitle,
} from './PostBody.styled';

interface PostProps {
    post: BlogPost;
}

const PostBody: React.FC<PostProps> = ({ post }) => {
    return (
        <PostContainer>
            <PostTitle>{post.title}</PostTitle>
            <PostPicture src={post.picture} alt={post.title} />
            <PostContent>{post.content}</PostContent>
        </PostContainer>
    );
};

export default PostBody;
