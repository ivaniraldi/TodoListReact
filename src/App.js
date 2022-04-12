import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import data from './Data.json'
import TodoList from './components/todoList/todo'
import { useState } from 'react';
//rootear la aplicacion


function App() {
  return (
      <>
        <NavBar />
        <TodoList data={data}/>
      </>
  );
}

export default App;
