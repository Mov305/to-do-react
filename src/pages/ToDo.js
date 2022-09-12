import React, { useState, useEffect } from 'react';
import TaskInput from '../Components/ToDo/input';
import Task from '../Components/ToDo/Task';
import { v4 } from 'uuid';

const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const data = localStorage.getItem('tasks');
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  const hanldeStorage = (data = tasks) => {
    localStorage.setItem('tasks', JSON.stringify(data));
  };

  const handleUpdate = (id, updateTitle) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: updateTitle };
      }
      return task;
    });
    setTasks(updatedTasks);
    hanldeStorage(updatedTasks);
  };

  const hanldeAddTask = (title) => {
    setTasks([
      ...tasks,
      {
        id: v4(),
        title,
        completed: false,
      },
    ]);
    hanldeStorage();
  };

  const hanldeDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    hanldeStorage(updatedTasks);
  };

  return (
    <section className="rounded-xl p-5 border border-gray-700 shadow-sm flex flex-col">
      <TaskInput hanldeAddTask={hanldeAddTask} />
      <ul>{tasks && tasks.map((task) => <Task key={task.id} task={task} handleUpdate={handleUpdate} hanldeDelete={hanldeDelete} />)}</ul>
    </section>
  );
};

export default ToDo;
