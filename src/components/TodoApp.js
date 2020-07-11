import React from 'react'
import { TodoProvider } from '../reducers/todoReducer'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

const TodoApp = () => {

    
    return (
        <TodoProvider>
        <div>
            <TodoAdd />
            <TodoList />
        </div>
        </TodoProvider>
    )

}

export default TodoApp