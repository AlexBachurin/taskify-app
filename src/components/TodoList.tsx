import React from 'react'
import './styles.scss'
import {Todo} from './Model'
import SingleTodoItem from './SingleTodoItem'
import {Droppable} from 'react-beautiful-dnd'
interface Props {
    todos: Todo[],
    completedTodos: Todo[],
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<Props> = ({todos, setTodos, completedTodos}) => {
  return (
      <div className="container">
        <Droppable droppableId ='ActiveList' >
            {
                (provided) => (
            <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
                <span className="todos__heading">
                    Active Tasks
                </span>
                {todos.map((item,index) => {
                    return (
                    <SingleTodoItem index={index} todos={todos} setTodos={setTodos} key={item.id} {...item}/>
                    )
                })}
                {provided.placeholder}
            </div>
                )
            }
        </Droppable>
         <Droppable droppableId ='CompletedList' >
            {
                (provided) => (
            <div className="todos completed" ref={provided.innerRef} {...provided.droppableProps}>
                <span className="todos__heading">
                    Completed Tasks
                </span>
                {completedTodos.map((item,index) => {
                    return (
                    <SingleTodoItem index={index} todos={todos} setTodos={setTodos} key={item.id} {...item}/>
                    )
                })}
                {provided.placeholder}
            </div> 
                )
            }
        </Droppable>
            
      </div>
    
  )
}

export default TodoList