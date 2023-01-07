import React from 'react';
import { InterfaceWrapper, ContentWrapper, IconButton, AddTodoInputWrapper, TodosWrapper } from './UserInterface.styles';
import { Container } from '../../containers/container';
import { GrClose } from 'react-icons/gr';
import { BsPlusLg } from 'react-icons/bs';
import TodoCard from '../TodoCard/TodoCard';
import { v4 as uuidv4 } from 'uuid';

interface ITodo {
    [id: string]: string;
}

const UserInterface = () => {
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
            setTodoItems({ [uuidv4()]: todo, ...todoItems });
            setTodo('');
        }
    };

    const handleDeleteTodo = (id: string) => {
        setTodoItems(
            Object.keys(todoItems)
                .filter((key) => !key.includes(id))
                .reduce((current, key) => {
                    return Object.assign(current, { [key]: todoItems[key] });
                }, {})
        );
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

    const handleEditTodo = (id: string, newValue: string) => {
        setTodoItems({ ...todoItems, [id]: newValue });
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
                    <TodosWrapper>
                        {Object.keys(todoItems).map((id) => (
                            <TodoCard
                                key={id}
                                id={id}
                                editingValue={editingValue}
                                content={todoItems[id]}
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
