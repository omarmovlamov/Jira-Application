import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormEditPage, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDescription, setTaskDescription] = useState(
    task ? task.taskDescription : ""
  );

  const inputChange = (event) => {
    setTitle(event.target.value);
  };

  const textareaChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const formSubmit = (event) => {
    const titleValueCheck = title;
    const taskDescriptionValueChech = taskDescription;

    event.preventDefault();

    if (titleValueCheck == "" || taskDescriptionValueChech == "") {
      alert("Please write a task!");
    } else {
      if (taskFormEditPage) {
        onUpdate(task.id, title, taskDescription);
      } else {
        onCreate(title, taskDescription);
      }
    }

    setTaskDescription("");
    setTitle("");
  };

  const UpdateValue = () => {};
  return (
    <div>
      {taskFormEditPage ? (
        <div className="task-edit">
          <h3>Please edit Task!</h3>
          <form>
            <label>Header edit</label>
            <input value={title} onChange={inputChange} />
            <label>Please edit task</label>
            <textarea
              rows="4"
              cols="50"
              value={taskDescription}
              onChange={textareaChange}
            />
            <button onClick={formSubmit}>Update</button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Please add Task!</h3>
          <form>
            <label>Header</label>
            <input value={title} onChange={inputChange} />
            <label>Please write task</label>
            <textarea
              rows="4"
              cols="50"
              value={taskDescription}
              onChange={textareaChange}
            />
            <button onClick={formSubmit}>Create</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
