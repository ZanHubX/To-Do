import React, { useContext } from "react";
import TaskContext from "../context/TaskContext";

const Task = ({ job: { id, task, isDone } }) => {
  const { removeTask, doneTask } = useContext(TaskContext);

  const handleRemoveTaskBtn = () => {
    if (confirm("Are you sure to delete this task?")) {
      removeTask(id);
    }
  };

  const handleOnChange = () => {
    doneTask(id);
  };
  return (
    <div className=" flex justify-between items-center border-2 border-slate-800 p-3 mb-2 rounded-lg last:mb-8 bg-slate-800">
      <div className="flex items-center gap-3 text-color">
        <input
          type="checkbox"
          onChange={handleOnChange}
          checked={isDone}
          className="size-4 "
        />
        <p className={isDone ? "line-through" : ""}>{task}</p>
      </div>
      <button onClick={handleRemoveTaskBtn} className=" p-3 rounded-lg ">
        <box-icon name="trash" color="#ee4a4a"></box-icon>
      </button>
    </div>
  );
};

export default Task;

