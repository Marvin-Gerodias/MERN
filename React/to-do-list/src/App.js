import './App.css';

import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

function App() {
  const[todo, setToDo] = useState([
    // {
    //   body: "Create ToDo List",
    //   completed: false
    // },
    // {
    //   body: "Dishes",
    //   completed: true
    // },
    // {
    //   body: "Laundry",
    //   completed: false
    // },
  ])

  const createTask = (task) => {
    setToDo([...todo, task]);
  }

  const updateTask = (idx) => {
    const copyTask = [...todo];
    copyTask[idx].completed = !copyTask[idx].completed;
    setToDo(copyTask);
  }

  const deleteTask = (idx) => {
    const copyTask = todo.filter((task, index) => {
      if(index !== idx){
        return true;
      }
      return false;
    });

    setToDo(copyTask);
  }

  return (
    <div className="App">
      <h1 style = {{margin: "50px 0 40px 0", fontSize: "50px"}}>To-Do App</h1>
      <Form createTask = {createTask} />
      <List todo = {todo} updateTask = {updateTask} deleteTask = {deleteTask} />
    </div>
  );
}

export default App;
