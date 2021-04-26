import React, { useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');
  const hadleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <form className='d-flex mt-5' onSubmit={hadleSubmit}>
        <input
          placeholder='add todo'
          required
          type='text'
          className='form-control'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='btn btn-success'>Add</button>
      </form>
    </div>
  );
};

export default InputTodo;
