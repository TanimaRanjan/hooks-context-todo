import React, { useContext } from 'react'
import Todo from './Todo'
import { TodoContext  } from '../reducers/todoReducer'

const TodoList = () => {

    const {todos} = useContext(TodoContext)
    
    return (
        <ul 
        style={{paddingLeft:10, width:'95%'}}
        >
            {todos && todos.map((todo) => ( 
                <Todo key={todo.id} {...todo} />
            ))}
        </ul> 
    )

}

export default TodoList