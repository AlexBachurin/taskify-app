import React, { useState, useEffect } from 'react';
import './App.scss';
import InputField from './components/InputField';
import { Todo } from './components/Model';
import TodoList from './components/TodoList';
import {DragDropContext, DropResult} from 'react-beautiful-dnd'
const getLocalStorageActive = () => {
    const list = localStorage.getItem('activeList');
    if (list) {
        return JSON.parse(list);
    }
    return [];
}

const getLocalStorageCompleted = () => {
    const list = localStorage.getItem('completedList');
    if (list) {
        return JSON.parse(list);
    }
    return [];
}
const App: React.FC = () => {
  const [completedTodos, setCompletedTodos] = useState<Todo[]>(getLocalStorageCompleted())
  const [task, setTask] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(getLocalStorageActive());
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    //check if something inside input
    if (task) {
      //add to state
      setTodos([...todos, {id: Date.now(), task, isDone: false}]);
      setTask('')
    }
  }
  const onDragEnd = (result: DropResult) => {
      const {source, destination} = result;
      //if there is no destination just return from func
      if (!destination) return;
      //if we drop in same position do nothing
      if (destination.droppableId === source.droppableId && 
        destination.index === source.index) return;
      let add,
          active = todos,
          complete = completedTodos;
      //if it came from ActiveList take this item, and remove it from list
      //from where it was taken
      if (source.droppableId === 'ActiveList') {
        add = active[source.index];
        active.splice(source.index, 1)
      } else {
        add = complete[source.index];
        complete.splice(source.index, 1)
      }
      //when add this item to the ActiveList or CompletedList depending on destination
      if (destination.droppableId === 'ActiveList') {
        active.splice(destination.index, 0, add)
      } else {
        complete.splice(destination.index, 0, add)
      }
      setCompletedTodos(complete);
      setTodos(active)
  }

  useEffect(() => {
    localStorage.setItem('activeList' , JSON.stringify(todos))
    localStorage.setItem('completedList', JSON.stringify(completedTodos))
  },[todos, completedTodos])
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
      <span className='heading'>Taskify</span>
      <InputField task={task} setTask={setTask} handleAdd={handleAdd}/>
      <TodoList setCompletedTodos={setCompletedTodos} completedTodos={completedTodos} todos={todos} setTodos={setTodos}/>
    </div>
    </DragDropContext>
  );
}

export default App;
