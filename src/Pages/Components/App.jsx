import { useState } from "react";
import TaskForm from "./TaskForm";
const App = () => {
    const [tasks, setTasks] = useState([]);
    const addTask = (title, priority) => {
        const newTask = {
          id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
          title,
          priority,
          completed: false,
        };
        setTasks([...tasks, newTask]);
      };
    return (
        <div>
            <h1 className="text-2xl font-medium text-center my-10">Todo List App</h1>
            <TaskForm onSubmit={addTask} />

        </div>
    );
};

export default App;