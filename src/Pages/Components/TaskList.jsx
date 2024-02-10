 
import TaskItem from './TaskItem';

const TaskList = ({tasks, toggleTaskStatus, editTask}) => {
  return (
    <div className='text-center my-10'>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTaskStatus={toggleTaskStatus}
          priority={task.priority} 
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
