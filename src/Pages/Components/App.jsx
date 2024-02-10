import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
const App = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks && storedTasks.length > 0) {
          setTasks(storedTasks);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        // filterTasks();
        // updateTaskCounters();
      }, [tasks]);
    const addTask = (title, priority) => {
        const newTask = {
          id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
          title,
          priority,
          completed: false,
        };
        setTasks([...tasks, newTask]);
      };
      console.log(tasks)
    const toggleTaskStatus = (taskId) => {
        setTasks(tasks.map(task => {
          if (task.id === taskId) {
            return { ...task, completed: !task.completed };
          }
          return task;
        }));
      };
    return (
        <div>
            <h1 className="text-2xl font-medium text-center my-10">Todo List App</h1>
            <TaskForm onSubmit={addTask} />
            <TaskList tasks={tasks}
             toggleTaskStatus={toggleTaskStatus}></TaskList>

        </div>
    );
};

export default App;