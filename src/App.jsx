import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import Task from "./components/Task";

const App = () => {
  const [tasks, setTask] = useState([
    { id: 1, task: "Complete React and TypeScript tutorials", isDone: false },
    {
      id: 2,
      task: "Build a small project using React and TypeScript",
      isDone: false,
    },
    {
      id: 3,
      task: "Stay updated with the latest trends in full stack development",
      isDone: true,
    },
    {
      id: 4,
      task: "Research basic principles of graphic design",
      isDone: false,
    },
    { id: 5, task: "Follow tutorials on character design", isDone: false },
  ]);

  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const doneTask = (id) => {
    setTask(
      tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  return (
    <div className="p-10">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList doneTask={doneTask} removeTask={removeTask} tasks={tasks} />
    </div>
  );
};

export default App;
