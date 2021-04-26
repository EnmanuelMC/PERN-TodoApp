import React from 'react';
//components import //
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

//------ END ------//
function App() {
  return (
    <div className='container'>
      <InputTodo />
      <ListTodos />
    </div>
  );
}

export default App;
