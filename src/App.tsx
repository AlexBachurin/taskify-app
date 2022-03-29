import React, { useState } from 'react';
import './App.scss';
import InputField from './components/InputField';



const App: React.FC = () => {
  const [task, setTask] = useState("");
  console.log(task)
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField task={task} setTask={setTask} />
    </div>
  );
}

export default App;
