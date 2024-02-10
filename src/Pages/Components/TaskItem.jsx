import React, { useState } from "react";

const TaskItem = ({ task, toggleTaskStatus, editTask, deleteTask }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);

  const handleToggleStatus = () => {
    toggleTaskStatus(task.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSaveEdit = () => {
    editTask(task.id, title, priority);
    setEditing(false);
  };

  const handleCancelEdit = () => {
    setTitle(task.title);
    setPriority(task.priority);
    setEditing(false);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };
  const handleDelete = () => {
    deleteTask(task.id);
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
    <div className="">
        {editing ? (
        <div className="space-x-2 ">
        
          <input type="text" value={title} onChange={handleChange} placeholder="Enter Task Title" className="input input-bordered input-sm w-full max-w-xs" />
         
          <select value={priority} onChange={handlePriorityChange} className="select select-bordered select-sm w-full max-w-xs">
            <option disabled selected>Select one</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
          <button onClick={handleSaveEdit} className='btn btn-success btn-sm'>Save</button>
          <button onClick={handleCancelEdit} className='btn btn-warning btn-sm'>Cancel</button>
        </div>
      ) : (  
        <tr className="">
      <td><span style={priorityStyles}></span></td>
      <td>{task.priority}</td>
      <td style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</td>
      <td>
        <button onClick={handleToggleStatus} className="btn btn-success btn-xs">
          {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>
        <button onClick={handleEdit} className="btn btn-info btn-xs">Edit</button>
        <button onClick={handleDelete} className="btn btn-error btn-xs">Delete</button>
      </td>
    </tr>)
    }
    </div>
  );
};

export default TaskItem;
