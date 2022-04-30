import { styled } from '../../../styles/theme';

const HeaderStyled = styled('header', {
    fontSize: '32px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '$primary',
    padding: '16px',
    borderBottom: '1px solid $shadow',

    '& span': {
        color: '$secondary',
    },
});

export { HeaderStyled };
