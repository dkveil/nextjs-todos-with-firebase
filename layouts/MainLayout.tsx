import React from 'react';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import { GlobalStyles } from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { useAuthContext } from '../context/AuthContext';

interface IMainLayout {
    children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
    const { user } = useAuthContext();

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    React.useEffect(() => {
        user && setMenuOpen(false);
    }, [user]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header toggleMenu={toggleMenu} />
            {menuOpen && <Menu toggleMenu={toggleMenu} />}
            <main>{children}</main>
        </ThemeProvider>
    );
};

export default MainLayout;
