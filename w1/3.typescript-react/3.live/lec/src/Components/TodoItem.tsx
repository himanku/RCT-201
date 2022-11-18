import React from 'react'
import { updateTodo } from '../api';
import { ColorMap, Todo } from '../constants';

interface TodoItemProps extends Todo {
    onUpdate: (todo: Todo) => void;
};
const TodoItem = (props: TodoItemProps) => {
    const updateLikeCount = async () => {
        let updatedTodo = await updateTodo({
            ...props,
            likes: props.likes + 1,
        });
        props.onUpdate(updatedTodo);
    }
  return (
    <div
        style={{
        padding: "5px",
        backgroundColor: ColorMap[props.type]
    }}
    >  
        {props.message} - {props.likes}
        <button onClick={updateLikeCount} >Increase</button>
    </div>
  )
}

export default TodoItem
