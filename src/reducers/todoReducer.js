import { uuid } from 'uuidv4';
import todoContext from "../contexts/todoContext"

const initialState =[
    { id: '0', task: 'Read a book', completed: false },
    { id: '1', task: 'Jog in a playground', completed: true },
    { id: '2', task: 'Write articles', completed: false }
]

const reducer = (state, action) => {

    const { type, payload } = action
    console.log(action)
    switch(type) {

        case 'ADD_TODO':
            return [...state, { id: uuid(), task: payload, completed: false }];
        case 'DELETE_TODO':
            return state.fitlter(todo => todo.id !== payload)
        case 'EDIT_TODO':
            return state.map(todo => todo.id === payload.id ? {...todo, task:payload.task} : todo )
        case 'TOGGLE_TODO':
            return state.map(todo => todo.id === payload ? {...todo, completed:!todo.completed } : todo )
        default:
            return state

    }
}

export default reducer

export const { TodoContext, TodoProvider } = todoContext(reducer, initialState)