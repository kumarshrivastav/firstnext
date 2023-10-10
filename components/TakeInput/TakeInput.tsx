"use client"
import { useTodos } from '@/store/todos'
import React,{FormEvent, useState} from 'react'

const TakeInput = () => {
    const [todo,setTodo]=useState('')
    const {handleAddTodo}=useTodos()
    const handleFormSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!todo){
          return alert('please enter your task')
        }
        handleAddTodo(todo)
        setTodo('')
    }
  return (
    <form onSubmit={handleFormSubmit}>
        <input type="text" name="take-input" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='enter your todo'  />
        <button type='submit'>Add</button>
    </form>
  )
}

export default TakeInput