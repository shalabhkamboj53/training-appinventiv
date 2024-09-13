import React from 'react'

const EditModel = ({CurrentModel, CurrentToDo, updateTodo, setCurrentToDo}) => {
  return (
    <div>
        <dialog id="todoModel" ref={CurrentModel} className="modal">
          <div className="modal-box">
            <form method="dialog">
              Update the task
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

            <div className="w-full md:w-11/12 mx-auto flex justify-between mt-10">
              <input type="text" placeholder="Update Task" value={CurrentToDo} onChange={(e)=>{setCurrentToDo(e.target.value)}} className="input input-bordered mb-5 w-full me-10" />
              <button className="btn btn-success" onClick={updateTodo}>Update</button>
            </div>

          </div>
        </dialog>
    </div>
  )
}

export default EditModel