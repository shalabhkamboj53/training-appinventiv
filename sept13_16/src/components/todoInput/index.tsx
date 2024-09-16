import { useSelector } from "react-redux"
import { addTodo } from "../../redux/slices/todoSlice"
import { useRef } from "react"
import { todosSelect, useAppDispatch } from "../../redux/selectors"

const TodoInput = () => {
    const dispatch = useAppDispatch()
    const inputRef = useRef<HTMLInputElement>(null)

    const todos = useSelector(todosSelect)

    const addTodoHandler = () => {
        const input = inputRef.current
        dispatch(addTodo({
            id: `${todos.length + 1}`,
            title: `${input?.value}`,
            isCompleted: false
        }))
        input!.value = ''
    }    

  return (
    <div className="text-center mt-20">
        <input type="text" placeholder="Add a todo" ref={inputRef} className="input input-bordered me-10" />
        <button className="btn" onClick={addTodoHandler}>Add</button>
    </div>
  )
}

export default TodoInput