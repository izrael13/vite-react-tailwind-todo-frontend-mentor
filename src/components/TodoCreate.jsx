import { useState } from "react";

const TodoCreate =  ({createTodo}) => {
  
  const [title, setTitle] = useState('')
  
  const handleSubmitAddTodo = (e) => { 
    e.preventDefault();
    if(title.trim().length > 0){
      createTodo(title)
    }
    setTitle("");
   }

  return (
        <form onSubmit={handleSubmitAddTodo} className="dark:bg-gray-900 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4">
          <span className="inline-block h-5 w-5 rounded-full border-2"></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="w-full text-gray-400 outline-none dark:bg-gray-800"
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
        </form>
    )
}

export default TodoCreate