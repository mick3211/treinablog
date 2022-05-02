import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '../Button/Button.styled';
import { HeaderStyled } from './Header.styled';

const Header: React.FC = () => {
    const { data: session } = useSession();

    return (
        <>
            <HeaderStyled>
                <Link href="/">
                    <a>
                        Treina<span>blog</span>
                    </a>
                </Link>

                <Button onClick={() => (!session ? signIn() : signOut())}>
                    {!session ? 'Login' : 'Logout'}
                </Button>
            </HeaderStyled>
        </>
    );
};

export default Header;
