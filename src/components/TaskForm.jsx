import React, { useState } from 'react';
import TaskList from './TaskList';

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '', status: 'pending' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAddTask = () => {
    addTask(newTask);
    setNewTask({ title: '', description: '', dueDate: '', status: 'pending' });
  };

  return (
    <form>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newTask.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newTask.description}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="dueDate"
        placeholder="Due Date"
        value={newTask.dueDate}
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleAddTask}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
