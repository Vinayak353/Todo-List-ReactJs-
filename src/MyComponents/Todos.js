import React from 'react'
import Todositems from './Todositems'
export default function Todos(props) {
  return (
    <div className='container' >
  <h3 className=' my-5'>Todos List </h3>
  {props.todos.length===0 ? "No Todos to display":
  props.todos.map((todo)=>{
return <Todositems todos={todo} onDelete={props.onDelete}/>
   })}
     
    </div>
  )
}

