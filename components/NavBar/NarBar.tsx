"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavBar(){
    const searchParams=useSearchParams().get('todos')
    console.log(searchParams)
    return(
        <nav>
            <Link href="/" className={searchParams===null ? "active":""}>All</Link>
            <Link href="/?todos=active" className={searchParams==="active" ? "active":""}>Active</Link>
            <Link href="/?todos=completed" className={searchParams==="completed" ? "active":""}>Completed</Link>
        </nav>
    )
}