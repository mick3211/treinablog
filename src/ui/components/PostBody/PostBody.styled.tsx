import { styled } from '../../../styles/theme';

export const PostContainer = styled('div', {
    maxWidth: '40em',
    margin: '0 auto',
});

export const PostTitle = styled('h2', {
    color: '$primary',
    fontSize: '20px',
    textAlign: 'center',
});

export const PostPicture = styled('img', {
    width: '100%',
});

export const PostContent = styled('div', {
    color: '$textPrimary',
});
