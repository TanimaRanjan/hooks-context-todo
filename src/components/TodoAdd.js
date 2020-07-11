import React, { useContext } from 'react'
import useInputState from '../hooks/useInputState';
import useStyles from '../styles/TodoAddStyles';
import { TodoContext } from '../reducers/todoReducer';


const TodoAdd = () => {

    const classes = useStyles()
    const {dispatch} = useContext(TodoContext)

    const [value, setValue, clearValue] = useInputState('')
    console.log(value, setValue)

        
    
    return (
        <form
            onSubmit={e=> {
                e.preventDefault()
                dispatch({type:'ADD_TODO', payload:value})
                clearValue()
            }}
            className={classes.TodoForm}
        >
           <input 
            placeholder="Add you task.."
            value={value}
            onChange={setValue}
            className={classes.input} 
            />
        </form>
    )

}

export default TodoAdd