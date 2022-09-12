import React, { useState } from 'react';
import {FcDeleteColumn} from 'react-icons/fc';

const Task = ({ task: { completed, title, id }, handleUpdate,hanldeDelete }) => {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(true);
  };

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setEdit(false);
    }
  };

  return (
    <li className='flex'>
      <FcDeleteColumn className='text-2xl mt-3 grayscale-[0.5] hover:grayscale-0' onClick={()=>hanldeDelete(id)}/>

      {edit === false && title ? (
        <div onDoubleClick={handleEdit} className="textInput">
          {title}
        </div>
      ) : (
        <input type="text" className="textInput" value={title} onChange={(e) => handleUpdate(id, e.target.value)} onKeyDown={(e) => handleUpdatedDone(e)} />
      )}
    </li>
  );
};

export default Task;
