import { BlogPost } from '../../../data/@types/BlogPostInterface';
import {
    PostContainer,
    PostContent,
    PostPicture,
    PostTitle,
} from './PostBody.styled';

const PostBody: React.FC<{ post: BlogPost }> = ({ post }) => {
    return (
        <PostContainer>
            <PostTitle>{post.title}</PostTitle>
            <PostPicture src={post.picture} alt={post.title} />
            <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
        </PostContainer>
    );
};

export default PostBody;
