import React from 'react'
import './styles.scss'
import {Todo} from './Model'
import SingleTodoItem from './SingleTodoItem'
interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
      <div className="container">
          <div className="todos">
            <span className="todos__heading">
                Active Tasks
            </span>
            {todos.map(item => {
                return (
                <SingleTodoItem todos={todos} setTodos={setTodos} key={item.id} {...item}/>
                )
            })}
          </div>
          <div className="todos remove">
              <span className="todos__heading">
                Completed Tasks
            </span>
            {todos.map(item => {
                return (
                <SingleTodoItem todos={todos} setTodos={setTodos} key={item.id} {...item}/>
                )
            })}
          </div>
      </div>
    // <div className='todos'>
    //     {todos.map(item => {
    //         return (
    //             <SingleTodoItem todos={todos} setTodos={setTodos} key={item.id} {...item}/>
    //         )
    //     })}
    // </div>
  )
}

export default TodoList