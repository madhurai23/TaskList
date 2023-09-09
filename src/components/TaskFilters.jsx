import React from 'react';
import TaskList from './TaskList';

const TaskFilters = ({ filterTasks }) => {
  return (
    <div>
      <button onClick={() => filterTasks('completed')}>Completed</button>
      <button onClick={() => filterTasks('pending')}>Pending</button>
    </div>
  );
};

export default TaskFilters;
