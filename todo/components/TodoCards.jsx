import { TodoListContext } from '@/context/todoList'
import React from 'react'
import { useContext } from 'react'
import TodoCard from './TodoCard'

const TodoCards = () => {
    const {TodoList} = useContext(TodoListContext)
  return (
    <>
        {
            TodoList.map((todo, index) => (
                <TodoCard todo={todo} key={index} />
            ))
        }
    </>
  )
}

export default TodoCards