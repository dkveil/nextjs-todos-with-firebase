import React from 'react';
import { MenuWrapper, CloseIcon, ContentWrapper } from './Menu.styles';
import { Container } from '../../containers/container';
import { useAuthContext } from '../../context/AuthContext';

const Navigation = ({ toggleMenu }: { toggleMenu: () => void }) => {
    const { handleLogout } = useAuthContext();

    const handleClick = () => {
        handleLogout();
        toggleMenu();
    };

    return (
        <MenuWrapper>
            <Container>
                <ContentWrapper>
                    <CloseIcon onClick={toggleMenu} />
                    <button onClick={handleClick}>Log out</button>
                </ContentWrapper>
            </Container>
        </MenuWrapper>
    );
};

export default Navigation;
