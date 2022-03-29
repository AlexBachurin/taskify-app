import React, { useState } from 'react';
import './App.scss';
import InputField from './components/InputField';
import { Todo } from './components/Model';


const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoS, setTodoS] = useState<Todo[]>([]);
  console.log(todoS)
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    //check if something inside input
    if (task) {
      //add to state
      setTodoS([...todoS, {id: Date.now(), task, isDone: false}]);
      setTask('')
    }
  }
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
