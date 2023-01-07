import React from 'react';
import { InterfaceWrapper, ContentWrapper, IconButton, AddTodoInputWrapper, TodosWrapper } from './UserInterface.styles';
import { Container } from '../../containers/container';
import { BsFillPencilFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

const UserInterface = () => {
    const [addTodoMode, setAddTodoMode] = React.useState<boolean>(false);
    const [todo, setTodo] = React.useState<string>('');
    const [todoItems, setTodoItems] = React.useState<string[]>([]);

    const handleAddTodoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    };

    const handleAddTodo = () => {
        if (todo.length > 0) {
            setTodoItems((prev) => [...prev, todo]);
            setTodo('');
        }
    };

    return (
        <InterfaceWrapper>
            <Container>
                <ContentWrapper>
                    {addTodoMode ? (
                        <AddTodoInputWrapper>
                            <input type="text" value={todo} onChange={handleAddTodoInputChange}></input>
                            <IconButton>
                                <BsFillPencilFill onClick={handleAddTodo} />
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
                            <div>{todo}</div>
                        ))}
                    </TodosWrapper>
                </ContentWrapper>
            </Container>
        </InterfaceWrapper>
    );
};

export default UserInterface;
