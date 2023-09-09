import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskFilters from './components/TaskFilters';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task List App</h1>
      </header>
      <main className="App-main">
        
        <TaskList />
        
      </main>
    </div>
  );
}

export default App;
