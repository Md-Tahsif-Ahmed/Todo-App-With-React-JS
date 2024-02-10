import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
const App = () => {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState(0);
    // local storage
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
    //  Add task
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
    //   toggle 
    const toggleTaskStatus = (taskId) => {
        setTasks(tasks.map(task => {
          if (task.id === taskId) {
            return { ...task, completed: !task.completed };
          }
          return task;
        }));
      };

    // Edit 
    const editTask = (taskId, newTitle, newPriority) => {
        setTasks(tasks.map(task => {
          if (task.id === taskId) {
            return { ...task, title: newTitle, priority: newPriority };
          }
          return task;
        }));
      };
    //   Delete
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
      };
    return (
        <div>
            <h1 className="text-2xl font-medium text-center my-10">Todo List App</h1>
            <TaskForm onSubmit={addTask} />
            <TaskList tasks={tasks}
             toggleTaskStatus={toggleTaskStatus}
             editTask={editTask}
             deleteTask={deleteTask}></TaskList>

        </div>
    );
};

export default App;