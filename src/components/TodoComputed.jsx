const TodoComputed = ({computedItemsLeft, clearCompleted}) => { 
    return (
        <section className="dark:bg-gray-900 flex justify-between bg-white px-4 py-4 rounded-b-md">
          <span className="text-gray-400">{computedItemsLeft} items left</span>
          <button onClick={clearCompleted} className=" text-gray-400">Clear Completed</button>
        </section>
    )
}

export default TodoComputed