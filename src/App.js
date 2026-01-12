// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import {AddTask} from './MyComponents/AddTask';
import React, {useState, useEffect} from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  } else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) =>{
    console.log("Deleting task", todo);
    
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))

    localStorage.setItem("todos", JSON.stringify(todos));

  }


  const [todos, setTodos] = useState(initTodo);
  
  const addTodo = (title, desc) => {
    console.log("Adding task", title, desc);
    let sno;
    if(todos.length==0){
      sno=0;
    } else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTask = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTask]);
    console.log(myTask);
  }

  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

  return (
    <>
      <Header title="MyTodo"/>
      <h1>Hello!</h1>
      <p>Welcome to Aanshika's Todos application.</p>
      <AddTask addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
