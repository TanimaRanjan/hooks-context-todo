import React, {useContext} from 'react'
import useInputState from '../hooks/useInputState';
import useStyles from '../styles/TodoEditStyles.js'
import { TodoContext } from '../reducers/todoReducer';

const TodoEdit = ({id='', task='', toggleEdit}={}) => {

    console.log(id, )
    const classes = useStyles()
    const {dispatch} = useContext(TodoContext)

    const [value, setValue, clearValue] = useInputState(task)
    console.log(value, setValue)
        
    
    return (
        <form
            onSubmit={e=> {
                e.preventDefault()

                dispatch({type:'EDIT_TODO', payload:{id:id, task:value}})
                
                if(toggleEdit) toggleEdit()
                
                clearValue()
            }}
            className={classes.TodoForm}
        >
           <input 
            autoFocus
            //placeholder="Add you task.."
            value={value}
            onChange={setValue}
            className={classes.input} 
            />
        </form>
    )


}

export default TodoEdit