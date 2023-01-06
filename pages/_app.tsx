import type { AppProps } from 'next/app';
import MainLayout from '../layouts/MainLayout';
import { AuthProvider } from '../context/AuthContext';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </AuthProvider>
    );
}
