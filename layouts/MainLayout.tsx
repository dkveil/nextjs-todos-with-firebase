import React from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';

interface IMainLayout {
    children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
    return (
        <>
            <GlobalStyles />
            {children}
        </>
    );
};

export default MainLayout;
