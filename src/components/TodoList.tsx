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
    <div className='todos'>
        {todos.map(item => {
            return (
                <SingleTodoItem todos={todos} setTodos={setTodos} key={item.id} {...item}/>
            )
        })}
    </div>
  )
}

export default TodoList