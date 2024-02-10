// App.js
import { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filterPriority, setFilterPriority] = useState('all');
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks && storedTasks.length > 0) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    filterTasks();
    updateTaskCounters();
   
  }, [tasks, filterPriority]);

  const addTask = (title, priority) => {
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      priority,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const editTask = (taskId, newTitle, newPriority) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, title: newTitle, priority: newPriority };
      }
      return task;
    }));
  };

  const filterTasks = () => {
    if (filterPriority === 'all') {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter(task => task.priority === filterPriority));
    }
  };

  const handlePriorityFilterChange = (e) => {
    setFilterPriority(e.target.value);
  };

  //Counter
    const updateTaskCounters = () => {
        setTotalTasks(tasks.length);
        const completedTasksCount = tasks.filter(task => task.completed).length;
        setCompletedTasks(completedTasksCount);
    };

  return (
    <div className='space-y-4'>
      <h1 className='text-2xl text-center font-medium my-10'>Todo List App</h1>
      <div className="flex items-center justify-center space-x-4">
      <div><span className='font-bold'>Total Tasks:</span> {totalTasks}</div>
      <div><span className='font-bold'>Completed Tasks:</span> {completedTasks}</div>
      </div>
       
      <TaskForm onSubmit={addTask} />
      <div className='text-center'>
        <label>Filter by Priority: </label>
        <select value={filterPriority} onChange={handlePriorityFilterChange} className="select select-bordered select-sm w-1/4 lg:w-full max-w-xs">
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
      </div>
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTaskStatus={toggleTaskStatus}
        editTask={editTask}
      />
    </div>
  );
};

export default App;
