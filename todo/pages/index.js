import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { TodoListContext } from "../context/todoList";
import TodoCards from "@/components/TodoCards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [TodoList, setTodoList] = useState({})
  const [CurrentToDo, setCurrentToDo] = useState("")
  let a=5;
  

  const addTodo = () => {
    if(CurrentToDo !== ""){
      if(TodoList.length){
        setTodoList([...TodoList, {id: TodoList[TodoList.length-1]['id']+1, title: CurrentToDo}])
        setCurrentToDo("")
      } else {
        setTodoList([{id: 1, title: CurrentToDo}])
        setCurrentToDo("")
      }
    } else {
      alert("Please enter a task")
    }
  }

  return (
    <>
      <TodoListContext.Provider value={{TodoList, setTodoList}}>
        <div className="navbar bg-base-500">
          <a className="btn btn-ghost text-xl">My Todo</a>
        </div>
        {console.log(a)}

        <div className="bg-base-100 py-10 px-10 md:px-0">
          <div className="w-full md:w-2/5 mx-auto flex justify-between">
            <input type="text" placeholder="Add new task" value={CurrentToDo} onChange={(e)=>{setCurrentToDo(e.target.value)}} className="input input-bordered mb-5 w-full me-10" />
            <button className="btn btn-primary" onClick={addTodo}>Add</button>
          </div>

          <div className="mx-10 px-5 pt-5 pb-2 rounded-lg bg-base-300">
            {
              TodoList.length ? <TodoCards /> : <div className="text-center pb-3">No task available</div>
            }
          </div>

        </div>
      </TodoListContext.Provider>

    </>
  );
}
