import React from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

interface IUser {}

interface IAuthContext {
    user: IUser | null;
    loading: boolean;
    handleRegister: (email: string, password: string) => void;
    handleLogin: (email: string, password: string) => void;
    handleLogout: () => void;
    userInfo: React.MutableRefObject<undefined>;
}

const AuthContext = React.createContext({} as IAuthContext);

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = React.useState<IUser | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    const userInfo = React.useRef();

    const handleRegister = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

    const handleLogin = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

    const handleLogout = () => signOut(auth);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, handleRegister, handleLogin, handleLogout, userInfo }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
