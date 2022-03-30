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
const TodoList: React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}) => {
  return (
      <div className="container">
        <Droppable droppableId ='ActiveList' >
            {
                (provided, snapshot) => (
            <div className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
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
                (provided, snapshot) => (
            <div className={`todos completed ${snapshot.isDraggingOver ? 'dragcomplete' : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
                <span className="todos__heading">
                    Completed Tasks
                </span>
                {completedTodos.map((item,index) => {
                    return (
                    <SingleTodoItem index={index} todos={completedTodos} setTodos={setCompletedTodos} key={item.id} {...item}/>
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