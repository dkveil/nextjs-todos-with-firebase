import React from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { ITodo } from '../components/UserInterface/UserInterface';
import { useAuthContext } from '../context/AuthContext';
import { db } from '../firebase';

export const useFetchTodos = () => {
    const { user } = useAuthContext();

    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);
    const [todos, setTodos] = React.useState<ITodo>({});

    React.useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    const docRef = doc(db, 'users', user?.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setTodos(docSnap.data().todos);
                    }
                } catch (error) {
                    setError('Something went wrong');
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchData();
    }, []);

    React.useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(null);
            }, 8000);
        }
    }, [error]);

    return { loading, error, setError, todos, setTodos };
};
