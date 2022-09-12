import React from 'react';
import TaskInput from '../Components/ToDo/input';
import Task from '../Components/ToDo/Task';
import { v4 } from 'uuid';

class ToDo extends React.Component {
  state = {
    tasks: localStorage.getItem('tasks') ? [...JSON.parse(localStorage.getItem('tasks'))] : [],
  };
  hanldeStorage = (tasks = this.state.tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  handleUpdate = (id, updateTitle) => {
    const updatedTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: updateTitle };
      }
      return task;
    });
    this.setState({
      tasks: updatedTasks,
    });
    this.hanldeStorage(updatedTasks);
  };

  hanldeAddTask = (title) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          id: v4(),
          title,
          completed: false,
        },
      ],
    });
    this.hanldeStorage();
  };

  render() {
    return (
      <section className="rounded-xl p-5 border border-gray-700 shadow-sm flex flex-col">
        <TaskInput hanldeAddTask={this.hanldeAddTask} />
        <ul>{this.state.tasks && this.state.tasks.map((task) => <Task key={task.id} task={task} handleUpdate={this.handleUpdate} />)}</ul>
      </section>
    );
  }
}

export default ToDo;
