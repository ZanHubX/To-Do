import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import Task from "./components/Task";

const App = () => {
  const [tasks, setTask] = useState([
    "Complete React and TypeScript tutorials",
    "Build a small project using React and TypeScript",
    "Stay updated with the latest trends in full stack development",
    "Research basic principles of graphic design",
    "Follow tutorials on character design",
  ]);

  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  }

  const removeTask = (taskToRemove) => {
    setTask(tasks.filter((task) => task !== taskToRemove));
  }
  return (
    <div className="p-10">
      <Heading />
      <CreateTask addTask={addTask}/>
      <TaskList removeTask={removeTask} tasks={tasks} />
    </div>
  );
};

export default App;
