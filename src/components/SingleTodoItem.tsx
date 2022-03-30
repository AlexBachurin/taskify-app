import React from 'react'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import {Todo} from './Model'
import './styles.scss'
interface Props {
    id: Todo['id'],
    task: Todo['task'],
    isDone: Todo['isDone']
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    key: number
}
const SingleTodoItem: React.FC<Props> = ({id, task, isDone, setTodos, todos}) => {
  return (
    <form className='todos__single'>
        <span className='todos__single-text'>
            {task}
        </span>
        <div>
            <span className='icon'><AiFillEdit/></span>
            <span className='icon'><MdDone /></span>
            <span className='icon'><AiFillDelete /></span>
        </div>
    </form>
  )
}

export default SingleTodoItem