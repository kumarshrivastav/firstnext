"use client"
import { useTodos } from '@/store/todos'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Todos = () => {
    const {todos,toggleTodoToComplete,handleToggleDelete}=useTodos()
    console.log(todos)
    let filterTodos=todos
    const searchParams=useSearchParams().get('todos')
    if(searchParams==='active'){
      filterTodos=filterTodos.filter((todo)=>!todo.completed)
    }else if(searchParams==='completed'){
      filterTodos=filterTodos.filter((todo)=>todo.completed)
    }
  return (
    <ul>
      {filterTodos && (filterTodos.map((todo)=>{
        return (
          <li key={todo.id}>
            <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={()=>toggleTodoToComplete(todo.id)} />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {
              todo.completed && (
                <button onClick={()=>handleToggleDelete(todo.id)}>Delete</button>
              )
            }
          </li>
        )
      }))}
    </ul>
  )
}

export default Todos