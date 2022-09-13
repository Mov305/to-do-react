import React, { useState } from 'react';
import Submit from '../../assets/svg/submit.svg';

const TaskInput = ({ hanldeAddTask }) => {
  const [title, setTitle] = useState('');
  const hanldeSubmit = () => {
    if (title.trim() !== '') {
      hanldeAddTask(title);
      setTitle('');
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      hanldeSubmit();
    }
  };

  return (
    <div className="flex w-full justify-between">
      <input type="text" className=" outline-none" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Input a task" onKeyDown={handleEnter} />
      <button className="w-8 h-8" onClick={hanldeSubmit}>
        <img className="w-full h-full" src={Submit} alt="Submit" />
      </button>
    </div>
  );
};

export default TaskInput;
