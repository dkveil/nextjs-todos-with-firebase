import React from 'react';
import Header from '../components/Header/Header';
import { GlobalStyles } from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

interface IMainLayout {
    children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <main>{children}</main>
        </ThemeProvider>
    );
};

export default MainLayout;
