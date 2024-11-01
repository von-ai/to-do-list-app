import React, { useState } from 'react';

const ToDoList = () => {
  const [isTask, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTask((t) => [...t, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updateTask = isTask.filter((_, i) => i !== index);
    setTask(updateTask);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updateTask = [...isTask];
      [updateTask[index], updateTask[index - 1]] = [
        updateTask[index - 1],
        updateTask[index],
      ];
      setTask(updateTask);
    }
  };

  const moveTaskDown = (index) => {
    if (index < isTask.length - 1) {
      const updateTask = [...isTask];
      [updateTask[index], updateTask[index + 1]] = [
        updateTask[index + 1],
        updateTask[index],
      ];
      setTask(updateTask);
    }
  };

  return (
    <>
      <div className="to-do-list">
        <h1>To Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Input a new task"
            onChange={handleInputChange}
            value={newTask}
          />
          <button className="add-button" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
        <ol>
          {isTask.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="button-delete"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                Down
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                up
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default ToDoList;
