import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDescription) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.random(Math.random() * 999999) * 100000,
        title,
        taskDescription,
      },
    ];
    setTasks(createdTasks);
  };

  const deleteTaskById = (id) => {
    const deletingTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(deletingTask);
  };

  const editTaskId = (id, updatedtitle, updatedTaskDescription) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return {
          id,
          title: updatedtitle,
          taskDescription: updatedTaskDescription,
        };
      }
      return task;
    });
    setTasks(updatedTask);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Tasks</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskId} />
    </div>
  );
}

export default App;
