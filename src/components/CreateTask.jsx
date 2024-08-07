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
    <div className="flex mb-5 text-color">
      <input
        type="text"
        placeholder="Write down your today plan !!"
        className="flex-grow bg-slate-800 border-2 border-slate-800 rounded-l-lg p-2 text-color"
        onChange={handleOnChange}
        value={job}
      />
      <button
        onClick={handleAddTaskBtn}
        className="text-color bg-slate-800  border-2 border-slate-800 rounded-r-lg py-2 px-4  "
      >
        {" "}
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
