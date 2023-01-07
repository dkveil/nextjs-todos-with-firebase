import React from 'react';
import { InterfaceWrapper, ContentWrapper, IconButton, AddTodoInputWrapper, TodosWrapper } from './UserInterface.styles';
import { Container } from '../../containers/container';
import { GrClose } from 'react-icons/gr';
import { BsPlusLg } from 'react-icons/bs';
import TodoCard from '../TodoCard/TodoCard';
import { v4 as uuidv4 } from 'uuid';

interface ITodo {
    id: string;
    content: string;
}

const UserInterface = () => {
    const [addTodoMode, setAddTodoMode] = React.useState<boolean>(false);
    const [todo, setTodo] = React.useState<string>('');
    const [todoItems, setTodoItems] = React.useState<ITodo[]>([]);

    const handleAddTodoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    };

    const handleAddTodo = () => {
        if (todo.length > 0) {
            setTodoItems((prev) => [...prev, { id: uuidv4(), content: todo }]);
            setTodo('');
        }
    };

    const handleDeleteTodo = (id: string) => {
        setTodoItems(todoItems.filter((todo) => todo.id !== id));
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    const handleEditTodo = (id: string, newValue: string) => {
        setTodoItems(
            todoItems.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, content: newValue };
                } else return todo;
            })
        );
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
                    <TodosWrapper>
                        {todoItems.map((todo) => (
                            <TodoCard
                                key={todo.id}
                                id={todo.id}
                                content={todo.content}
                                handleDelete={handleDeleteTodo}
                                handleEdit={handleEditTodo}
                            />
                        ))}
                    </TodosWrapper>
                </ContentWrapper>
            </Container>
        </InterfaceWrapper>
    );
};

export default UserInterface;
