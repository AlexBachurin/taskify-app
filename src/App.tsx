import React, { useState } from 'react';
import './App.scss';
import InputField from './components/InputField';
import { Todo } from './components/Model';
import TodoList from './components/TodoList';


const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todos)
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    //check if something inside input
    if (task) {
      //add to state
      setTodos([...todos, {id: Date.now(), task, isDone: false}]);
      setTask('')
    }
  }
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
