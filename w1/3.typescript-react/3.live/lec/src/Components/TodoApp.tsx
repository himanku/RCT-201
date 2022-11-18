import React, { useEffect, useState } from 'react'
import { getTodos } from '../api';
import { Todo } from '../constants';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const onAdd = (todo: Todo) => {
        setTodos([...todos, todo]);
    }

    const onUpdate = (updatedTodo: Todo) => {
        let updatedTodos = todos.map((todo) => {
            if(todo.id === updatedTodo.id) {
                return updatedTodo;
            }
            return todo;
        })
    }
    useEffect(()=> {
        getTodos().then((d)=> {
            setTodos(d);
        });
    }, []);
  return (
    <>
        <h1>Todo App</h1>
        <TodoInput onAdd={onAdd}/>
    {todos.map((todo)=> (
        <TodoItem 
            key={todo.id} 
            onUpdate={onUpdate}
            {...todo}
            />
    ))}
    </>
  );
}
