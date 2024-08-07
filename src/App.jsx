import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import Task from "./components/Task";
import TextProvider from "./context/TextProvider";
import "./custom.css"

const App = () => {
  

  return (
    <TextProvider>
      <div className="p-10 bg-screen">
        <Heading />
        <CreateTask  />
        <TaskList />
      </div>
    </TextProvider>
  );
};

export default App;
