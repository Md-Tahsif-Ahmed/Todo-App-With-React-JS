 
import TaskItem from './TaskItem';

const TaskList = ({tasks, toggleTaskStatus}) => {
  return (
    <div className='text-center my-10'>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskStatus={toggleTaskStatus}
          priority={task.priority} 
        />
      ))}
    </div>
  );
};

export default TaskList;
