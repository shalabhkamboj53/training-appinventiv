import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { TodoListContext } from '@/context/todoList'
import EditModel from './EditModel'

const TodoCard = ({todo}) => {
    const {setTodoList} = useContext(TodoListContext)
    const [CurrentToDo, setCurrentToDo] = useState("")
    const CurrentModel = useRef('')

    useEffect(() => {
        setCurrentToDo(todo.title)
    }, [])
    

    const deleteTodo = () => {
        setTodoList(prev => prev.filter(item => item.id !== todo.id))
    }

    const updateTodo = () => {
        setTodoList(prev => prev.map(item => item.id === todo.id ? {...item, title: CurrentToDo} : item))
        CurrentModel.current.close()
    }

  return (
    
    <div className="bg-base-100 w-full px-5 py-3 rounded-lg border flex justify-between items-center mb-3">
        <div>{todo.title}</div>
        <div>
            <button className="btn btn-success me-3" onClick={()=>{CurrentModel.current.showModal()}}><i className="bi bi-pencil-square text-white text-lg"></i></button>
            <button className="btn btn-error"><i className="bi bi-trash3 text-white text-lg" onClick={deleteTodo}></i></button>
        </div>

        <EditModel CurrentModel={CurrentModel} CurrentToDo={CurrentToDo} updateTodo={updateTodo} setCurrentToDo={setCurrentToDo} />

    </div>
  )
}

export default TodoCard