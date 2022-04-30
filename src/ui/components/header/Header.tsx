import Link from 'next/link';
import { HeaderStyled } from './Header.styled';

const Header: React.FC = () => {
    return (
        <>
            <Link href="/">
                <a>
                    <HeaderStyled>
                        Treina<span>blog</span>
                    </HeaderStyled>
                </a>
            </Link>
        </>
    );
};

export default Header;
