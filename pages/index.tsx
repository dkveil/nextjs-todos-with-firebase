import Login from '../components/Login/Login';
import { useAuthContext } from '../context/AuthContext';

export default function Home() {
    const { user, handleLogout } = useAuthContext();

    return (
        <>
            {!user ? (
                <Login />
            ) : (
                <div onClick={handleLogout} style={{ backgroundColor: 'yellow', width: '100vw', height: '100vw' }}>
                    logout
                </div>
            )}
        </>
    );
}
