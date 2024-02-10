import React from "react";

const TaskItem = ({ task, toggleTaskStatus }) => {
  const handleToggleStatus = () => {
    toggleTaskStatus(task.id);
  };

  const priorityColors = {
    low: 'green',
    medium: 'orange',
    high: 'red'
  };

  const priorityStyles = {
    borderRadius: '50%',
    width: '12px',
    height: '12px',
    backgroundColor: priorityColors[task.priority],
    display: 'inline-block',
    marginRight: '8px'
  };

  return (
    <tr className="">
      <td><span style={priorityStyles}></span></td>
      <td>{task.priority}</td>
      <td style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</td>
      <td>
        <button onClick={handleToggleStatus} className="btn btn-success btn-xs">
          {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;
