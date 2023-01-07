import React from 'react';
import { TodoCardWrapper } from './TodoCard.styles';
import { BsFillPencilFill } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { MdDone } from 'react-icons/md';

interface ITodoCard {
    handleDelete: (id: string) => void;
    handleOpenEdit: (id: string, content: string) => void;
    handleEdit: (id: string, newValue: string) => void;
    id: string;
    content: string;
    editing: boolean;
    closeEditing: () => void;
    editingValue: string;
    setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoCard = ({ handleDelete, id, content, editing, handleEdit, handleOpenEdit, setValue, editingValue }: ITodoCard) => {
    return (
        <TodoCardWrapper>
            <div>{editing ? <input value={editingValue} onChange={setValue} autoFocus /> : content}</div>
            {editing ? (
                <MdDone onClick={() => handleEdit(id, editingValue)} />
            ) : (
                <BsFillPencilFill onClick={() => handleOpenEdit(id, content)} />
            )}

            <IoMdClose onClick={() => handleDelete(id)} />
        </TodoCardWrapper>
    );
};

export default TodoCard;
