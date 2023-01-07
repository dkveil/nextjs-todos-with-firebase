import React from 'react';
import { InterfaceWrapper, ContentWrapper, IconButton, AddTodoInputWrapper, TodosWrapper } from './UserInterface.styles';
import { Container } from '../../containers/container';
import { GrClose } from 'react-icons/gr';
import { BsPlusLg } from 'react-icons/bs';
import TodoCard from '../TodoCard/TodoCard';
import { v4 as uuidv4 } from 'uuid';
import { useFetchTodos } from '../../hooks/useFetchTodos.hooks';
import { doc, setDoc, deleteField } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuthContext } from '../../context/AuthContext';

export interface ITodo {
    [id: string]: string;
}

const UserInterface = () => {
    const { user } = useAuthContext();

    if (!user) return null;

    const { todos, setTodos, loading, error, setError } = useFetchTodos();

    const [addTodoMode, setAddTodoMode] = React.useState<boolean>(false);
    const [todo, setTodo] = React.useState<string>('');
    const [todoItems, setTodoItems] = React.useState<ITodo>({});
    const [editingTask, setEditingTask] = React.useState<string | null>(null);
    const [editingValue, setEditingValue] = React.useState<string>('');

    const handleAddTodoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    };

    const handleAddTodo = async () => {
        if (todo.length > 0) {
            try {
                const docRef = doc(db, 'users', user.uid);
                await setDoc(
                    docRef,
                    {
                        ['todos']: {
                            [uuidv4()]: todo,
                        },
                    },
                    { merge: true }
                );

                setTodos({ [uuidv4()]: todo, ...todos });
                setTodo('');
            } catch (err) {
                setError('Something went wrong');
            }
        }
    };

    const handleDeleteTodo = async (id: string) => {
        try {
            const docRef = doc(db, 'users', user.uid);
            await setDoc(
                docRef,
                {
                    ['todos']: {
                        [id]: deleteField(),
                    },
                },
                { merge: true }
            );

            setTodos(
                Object.keys(todos)
                    .filter((key) => !key.includes(id))
                    .reduce((current, key) => {
                        return Object.assign(current, { [key]: todos[key] });
                    }, {})
            );
        } catch (err) {
            setError('Something went wrong');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    const handleOpenEdit = (id: string, content: string) => {
        setEditingTask(id);
        setEditingValue(content);
    };

    const handleEditTodo = async (id: string, newValue: string) => {
        try {
            const docRef = doc(db, 'users', user.uid);
            await setDoc(
                docRef,
                {
                    ['todos']: {
                        [id]: newValue,
                    },
                },
                { merge: true }
            );
            setTodos({ ...todos, [id]: newValue });
        } catch (err) {
            setError('Something went wrong');
        }
        setEditingTask(null);
        setEditingValue('');
    };

    return (
        <InterfaceWrapper>
            <Container>
                <ContentWrapper>
                    {addTodoMode ? (
                        <AddTodoInputWrapper>
                            <input type="text" value={todo} onChange={handleAddTodoInputChange} onKeyDown={handleKeyPress}></input>
                            <IconButton onClick={handleAddTodo}>
                                <BsPlusLg />
                            </IconButton>
                            <IconButton onClick={() => setAddTodoMode(false)}>
                                <GrClose />
                            </IconButton>
                        </AddTodoInputWrapper>
                    ) : (
                        <button className="addtodo-button" onClick={() => setAddTodoMode(true)}>
                            Add todo
                        </button>
                    )}
                    {error && <div className="error">Something went wrong</div>}
                    <TodosWrapper>
                        {!loading &&
                            Object.keys(todos).map((id) => (
                                <TodoCard
                                    key={id}
                                    id={id}
                                    editingValue={editingValue}
                                    content={todos[id]}
                                    handleDelete={handleDeleteTodo}
                                    handleEdit={handleEditTodo}
                                    editing={editingTask === id}
                                    closeEditing={() => setEditingTask(null)}
                                    handleOpenEdit={handleOpenEdit}
                                    setValue={(e: React.ChangeEvent<HTMLInputElement>) => setEditingValue(e.target.value)}
                                />
                            ))}
                    </TodosWrapper>
                </ContentWrapper>
            </Container>
        </InterfaceWrapper>
    );
};

export default UserInterface;
