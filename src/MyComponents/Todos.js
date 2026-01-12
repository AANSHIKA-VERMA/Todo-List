import React from 'react'
import {Todo} from './Todo';

export const Todos = (props) => {
  let myStyle={
    minHeight: "50vh",
    margin: "40px auto"
  }
  return (
    <div className="container my-5" style={myStyle}>
      <h3 className="text-center">Your ToDo List</h3>
      {props.todos.length===0? "No Task to display": 
        props.todos.map((todo)=>{
          return(
            <>
            <Todo todo={todo} key={todo.sno} onDelete = {props.onDelete}/>
            <hr/>
            </>
          ) 
        })
      }
    </div>
  )
}
