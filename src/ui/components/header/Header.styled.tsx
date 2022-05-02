import { styled } from '../../../styles/theme';
import { Button } from '../Button/Button.styled';

export const HeaderStyled = styled('header', {
    fontSize: '32px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '$primary',
    padding: '16px',
    borderBottom: '1px solid $shadow',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& span': {
        color: '$secondary',
    },
});
