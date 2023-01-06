import React from 'react';
import { ContentWrapper, HeaderWrapper, StyledUserIcon } from './Header.styles';
import { Container } from '../../containers/container';
import Link from 'next/link';

const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <ContentWrapper>
                    <Link href="/">
                        <h1 className="logo">Todo App</h1>
                    </Link>
                    <StyledUserIcon />
                </ContentWrapper>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
