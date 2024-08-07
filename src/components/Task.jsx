import React from 'react'

const Task = ({job,removeTask}) => {

    const handleRemoveTaskBtn = () =>{
        if(confirm("Are you sure to delete this task?")){
            removeTask(job)
        }
    }
  return (
    <div className=" flex justify-between items-center border-2 border-slate-300 p-3 mb-2 rounded-lg last:mb-0">
      <p>{job}</p>
      <button onClick={handleRemoveTaskBtn} className="border-2 bg-slate-300 border-slate-300 p-3 rounded-lg">
        Delete
      </button>
    </div>
  );
}

export default Task