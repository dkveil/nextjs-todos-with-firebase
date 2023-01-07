import React from 'react';
import { ContentWrapper, HeaderWrapper, StyledUserIcon } from './Header.styles';
import { Container } from '../../containers/container';
import Link from 'next/link';
import { useAuthContext } from '../../context/AuthContext';

const Header = ({ toggleMenu }: { toggleMenu: () => void }) => {
    const { user } = useAuthContext();

    return (
        <HeaderWrapper>
            <Container>
                <ContentWrapper>
                    <Link href="/">
                        <h1 className="logo">Todo App</h1>
                    </Link>
                    {user && <StyledUserIcon onClick={toggleMenu} />}
                </ContentWrapper>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
