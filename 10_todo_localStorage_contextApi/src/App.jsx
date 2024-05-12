import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos ((prev) => [{...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos ((prev) => prev.map (
      (prevTodo) => prevTodo.id === id ? {...todo} : prevTodo 
    ))
  }

  const deleteTodo = (id) =>{
    setTodos ((prev) => 
      prev.filter ((prevTodo) => prevTodo.id !== id
    ))
  }

  const toggleTodo = (id, todo) => {
    setTodos ((prev) => prev.map((prevTodo) => 
      prevTodo.id === id ? {...prevTodo, isCompleted : !prevTodo.isCompleted} : prevTodo
   ))
  }

  useEffect (()=> {
    const data = JSON.parse (localStorage.getItem("todostorage"))
    if (data && data.length > 0 ){
      setTodos(data)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todostorage", JSON.stringify(todos))
  } , [todos])

  return (
    <TodoProvider value = { { todos, addTodo, updateTodo, deleteTodo, toggleTodo } }>
      <h1 className='bg-slate-300 text-2xl'>TODO Project</h1>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                          todos.map((todo) => (
                            <div key={todo.id}>
                              <TodoItem todo: {todo}/>
                            </div>
                          ))
                        }
                    </div>
                </div>
            </div>
    
    </TodoProvider>
  )
}

export default App
