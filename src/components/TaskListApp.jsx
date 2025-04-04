import React, { useState } from "react";

const TaskListApp = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (event) => {
    event.preventDefault();

    const task = event.target.elements.task.value;
    const start = event.target.elements.startField.value;
    const end = event.target.elements.dueField.value;

    if (!task || !start || !end) {
      // Show error or return early if any field is missing
      return;
    }

    const startDate = new Date(start);
    const endDate = new Date(end);
    const daysDifference = Math.floor(
      (endDate - startDate) / (1000 * 60 * 60 * 24)
    );

    setTasks((prevTasks) => [
      ...prevTasks,
      { task, start, end, daysDifference, done: false },
    ]);
    event.target.reset();
  };

  const toggleTaskDone = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Task List</h1>
      <form onSubmit={handleAddTask}>
        <div>
          <label>Start Date:</label>
          <input id="startField" name="startField" type="date" required />
        </div>
        <div>
          <label>Due Date:</label>
          <input id="dueField" name="dueField" type="date" required />
        </div>
        <div>
          <label>Task:</label>
          <input id="task" name="task" type="text" required />
        </div>
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.done ? "done" : "notdone"}>
            {task.task} starts: {task.start} and is due by: {task.end}. You will
            have {task.daysDifference} days to have it completed.
            <button onClick={() => toggleTaskDone(index)}>
              {task.done ? "Mark Not Done" : "Mark Done"}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListApp;
