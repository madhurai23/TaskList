import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskFilters from './TaskFilters';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const filterTasks = (status) => {
    setFilter(status);
  };

  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' }
        : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks =
    filter === 'all' ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div>
      <h1>Task List</h1>
      <TaskForm addTask={addTask} />
      <TaskFilters filterTasks={filterTasks} />
      <ul>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.status === 'completed' ? 'line-through' : 'none' }}
          >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <button onClick={() => toggleTaskStatus(task.id)}>
              {task.status === 'completed' ? 'Mark Pending' : 'Mark Completed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
