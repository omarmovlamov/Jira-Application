import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const deleteTask = () => {
    onDelete(task.id);
  };
  const editTask = () => {
    setShowEdit(!showEdit);
  };
  const Submit = (id, updatedtitle, updatedTaskDescription) => {
    setShowEdit(false);
    onUpdate(id, updatedtitle, updatedTaskDescription);
  };
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormEditPage={true} onUpdate={Submit} />
      ) : (
        <div>
          <h3>Your Task</h3>
          <p>{task.title}</p>
          <h3>To Do</h3>
          <p>{task.taskDescription}</p>
          <div>
            <button onClick={deleteTask} id="delete">
              Delete
            </button>
            <button onClick={editTask} id="edit">
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
