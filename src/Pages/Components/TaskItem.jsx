 

const TaskItem = ({task}) => {
    return (
        <div>
           <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span> 
        </div>
    );
};

export default TaskItem;