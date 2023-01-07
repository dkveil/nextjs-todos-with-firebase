import Login from '../components/Login/Login';
import { useAuthContext } from '../context/AuthContext';
import UserInterface from '../components/UserInterface/UserInterface';

export default function Home() {
    const { user } = useAuthContext();

    return !user ? <Login /> : <UserInterface />;
}
