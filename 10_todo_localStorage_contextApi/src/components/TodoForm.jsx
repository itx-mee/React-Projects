import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
    
    const {addTodo} = useTodo()

    const [todoMsg, setTodoMsg] = useState("")

    const clickHandler = (e) => {
        e.preventDefault()
        if (!todoMsg){
            return
        }
        addTodo ({id: Date.now(), todo:todoMsg , isCompleted : false})
        setTodoMsg("")
    }

    return (
        <form onSubmit={clickHandler} className="flex">
            <input
                type="text"
                value = {todoMsg}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=> setTodoMsg(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}
export default TodoForm;
