import React from 'react';
import { TodoCardWrapper } from './TodoCard.styles';
import { BsFillPencilFill } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { MdDone } from 'react-icons/md';

interface ITodoCard {
    handleDelete: (id: string) => void;
    handleEdit: (id: string, newValue: string) => void;
    id: string;
    content: string;
}

const TodoCard = ({ handleDelete, handleEdit, id, content }: ITodoCard) => {
    const [editing, setEditing] = React.useState<boolean>(false);
    const [editedValue, setEditedValue] = React.useState<string>(content);

    const toggleEditing = () => setEditing((prev) => !prev);

    React.useEffect(() => {
        if (!editing && editedValue !== content) setEditedValue(content);
    }, [editing]);

    const handleEditTask = () => {
        setEditing(false);
        setEditedValue(editedValue);
        handleEdit(id, editedValue);
    };

    return (
        <TodoCardWrapper>
            <div>
                {editing ? (
                    <input
                        value={editedValue}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEditedValue(e.target.value)}
                        autoFocus
                    />
                ) : (
                    content
                )}
            </div>
            {editing ? <MdDone onClick={handleEditTask} /> : <BsFillPencilFill onClick={toggleEditing} />}

            <IoMdClose onClick={() => handleDelete(id)} />
        </TodoCardWrapper>
    );
};

export default TodoCard;
