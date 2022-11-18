import React, { useState } from 'react'
import { addTodo } from '../api';
import { Todo, TodoType } from '../constants'

type TodoInputProps = {
    onAdd: (todo: Todo) => void;
}
const TodoInput = (props: TodoInputProps) => {
const {onAdd} = props;
const [value, setValue] = useState<string>("");
const [type, setType] = useState<TodoType>(TodoType.Learning);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
};
const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as TodoType);
};
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
let data = await addTodo(value, TodoType.Learned);
onAdd(data);
} 
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type here..." value={value}
        onChange={handleChange} />
        <select value={type} onChange={handleTypeChange}>
            {Object.values(TodoType).map((todoType)=> (
                <option key={todoType}
                    value={todoType}
                    >
                        {todoType}
                </option>
            ))}
        </select>
        <button type="submit">Add</button>
    </form>
    </>
  );
};
export default TodoInput;
