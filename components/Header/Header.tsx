import React from 'react';
import { ContentWrapper, Wrapper, StyledUserIcon } from './Header.styles';
import { Container } from '../../containers/container';
import Link from 'next/link';

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <ContentWrapper>
                    <Link href="/">
                        <h1 className="logo">Todo App</h1>
                    </Link>
                    <StyledUserIcon />
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

export default Header;
