 

const TaskItem = ({task, toggleTaskStatus }) => {
    const handleToggleStatus = () => {
        toggleTaskStatus(task.id);
      };
    return (
        <div className="space-x-2">
           <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span> 
           <button onClick={handleToggleStatus} className="btn btn-success btn-xs">{task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}</button>
        </div>
    );
};

export default TaskItem;