import React, { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

const CreateTask = () => {
  const [job, setJob] = useState("");

  const {addTask} = useContext(TaskContext)

  const handleOnChange = (event) => {
    setJob(event.target.value);
  };

  const handleAddTaskBtn = () => {
    const newtask = {
      id: Date.now(),
      task: job,
      isDone: false,
    };
    addTask(newtask);
    setJob("");
  }


  return (
    <div className="flex mb-5">
      <input
        type="text"
        placeholder="Write down your plan!!"
        className="flex-grow bg-slate-100 border-2 border-slate-300 rounded-l-lg p-2 "
        onChange={handleOnChange}
        value={job}
      />
      <button onClick={handleAddTaskBtn} className="bg-slate-300 border-2 border-slate-300 rounded-r-lg py-2 px-4 ">
        {" "}
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
