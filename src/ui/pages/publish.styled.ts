import { styled } from '../../styles/theme';

export const PageTitle = styled('h2', {
    textAlign: 'center',
});

export const PostForm = styled('form', {
    width: '100%',
    maxWidth: '40em',
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,

    '& > :where(input, div)': {
        minHeight: 32,
        padding: 8,
        borderRadius: 3,
        border: '1px solid $shadow',
    },
});

export const PostContent = styled('div', {
    minHeight: 150,
    resize: 'vertical',
    overflow: 'scroll',
});
