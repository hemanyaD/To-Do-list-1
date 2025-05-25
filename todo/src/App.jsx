import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-emerald-400'>
      <div className="bg-white shadow-lg rounded-3xl px-10 py-10 w-full max-w-md">
        <h1 className='text-3xl font-bold text-center text-gray-900 mb-6'>
          TODO LIST</h1>
        <div className='mb-4 flex'>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder='Add a new Todo'
            className='flex-grow px-3 py-2 border rounded-l-lg'
          />
          <button
            onClick={addTodo}
            className='bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 cursor-pointer'>
            ADD
          </button>
        </div>
        <ul className='space-y-2'>
          {todos.map((todo) => (
            <li key={todo.id} className='flex items-center p-3 rounded-lg bg-slate-100 border border-gray-200'>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className='mr-2 h-5 w-5 text-blue-600'
              />
              <span className={`flex-grow ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className='cursor-pointer ml-2 border-none p-2 rounded-lg bg-red-500 text-white hover:bg-red-600'>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;
