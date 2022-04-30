import { styled } from '../../../styles/theme';

export const ListStyled = styled('ul', {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: '16px',
    listStyleType: 'none',
    padding: '0',
    margin: '16px auto',
    maxWidth: '1024px',
});

export const ListItemStyled = styled('li', {
    padding: '16px',
    maxWidth: '320px',
    color: '$textSecondary',
    boxShadow: '$sm',
    borderRadius: '4px',

    '& img': {
        width: '100%',
    },

    '& h2': {
        margin: '0',
        color: '$primary',
        fontSize: '20px',
    },

    '&:hover': {
        transform: 'scale(1.01)',
    },

    '@sm': {
        maxWidth: '100%',
    },
});
