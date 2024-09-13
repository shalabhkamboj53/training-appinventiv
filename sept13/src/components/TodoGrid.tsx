import { deleteTodo, updateTodo } from "../redux/slices/todoSlice"
import { todosSelect, useAppDispatch, useAppSelector } from "../redux/store"

const TodoGrid = () => {

    const todos = useAppSelector(todosSelect)
    const dispatch = useAppDispatch()

    const markAsCompleteHandler = (id:string) => {
        dispatch(updateTodo({id}))
    }

    const deleteTodoHandler = (id:string) => {
        dispatch(deleteTodo({id}))
    }

  return (
    <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-10 mt-28">
            {
                todos?.map((todo) => {
                    return (
                        <div key={todo.id} className="card shadow-lg border-[1px] border-white bg-gray-600">
                            <div className="card-body text-center">
                                <h2 className="font-bold text-2xl">{todo.title}</h2>
                                <p>{todo.isCompleted ? 'Completed' : 'Not Completed'}</p>
                                {
                                    todo.isCompleted ? '' : <button className="btn mt-2" onClick={()=>{markAsCompleteHandler(todo.id)}}>Mark as Complete</button>
                                }
                                <button className="btn btn-warning" onClick={()=>{deleteTodoHandler(todo.id)}}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TodoGrid