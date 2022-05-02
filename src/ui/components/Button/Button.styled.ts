import { styled } from '../../../styles/theme';

export const Button = styled('button', {
    cursor: 'pointer',
    padding: '16px 24px',
    minWidth: '120px',
    fontSize: '14px',
    backgroundColor: '$secondary',
    color: 'white',
    borderRadius: '4px',
    border: 'none',
    fontWeight: 'bold',

    '&:hover': {
        opacity: 0.8,
    },

    variants: {
        size: {
            lg: { fontSize: '16px' },
        },
    },
});
