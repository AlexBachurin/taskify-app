import React, { useState } from 'react';
import './App.scss';
import InputField from './components/InputField';
import { Todo } from './components/Model';
import TodoList from './components/TodoList';
import {DragDropContext} from 'react-beautiful-dnd'

const App: React.FC = () => {
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
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
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
      <span className='heading'>Taskify</span>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd}/>
      <TodoList setCompletedTodos={setCompletedTodos} completedTodos={completedTodos} todos={todos} setTodos={setTodos}/>
    </div>
    </DragDropContext>
  );
}

export default App;
