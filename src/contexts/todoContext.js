import React, { createContext, useReducer } from 'react'

export default (reducer, initialState) => {

 const TodoContext = createContext()

 const TodoProvider = ({children}) => {

    const [todos, dispatch] = useReducer(reducer, initialState)

    return (
        <TodoContext.Provider value={{todos, dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}
    return { TodoContext, TodoProvider } 
}

