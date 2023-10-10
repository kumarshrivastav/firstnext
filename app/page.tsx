import NavBar from '@/components/NavBar/NarBar'
import TakeInput from '@/components/TakeInput/TakeInput'
import Todos from '@/components/Todos/Todos'
import {FcTodoList} from "react-icons/fc"
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='heading'><FcTodoList size={50}/><h2>Todo Application</h2><FcTodoList size={50}/></div>
      <NavBar/>
      <TakeInput/>
      <Todos/>
    </main>
  )
}
