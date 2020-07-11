import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './components/TodoApp';
import useStyles from './styles/AppStyles'

function App() {

  const classes = useStyles()
  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <h1>todo<span>list</span></h1>
        <h2>Todo App using Hooks & Context</h2>
      </header>
      <TodoApp />
    </div>
  );
}

export default App;
