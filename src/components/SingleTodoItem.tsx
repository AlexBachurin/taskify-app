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
    const handleDone = (itemId : number) => {
        console.log(itemId)
        //find todo to mark as done, toggle isDone property,return new array
        setTodos(todos.map(item => {
            if(item.id === itemId) {
                return {...item, isDone: !item.isDone}
            }
            return item;
        }))
        
    }
  return (
    <form className='todos__single'>
        <span className={isDone ? 'todos__single-text_strike' : 'todos__single-text'}>
            {task}
        </span>
        <div>
            <span className='icon'><AiFillEdit/></span>
            <span  onClick={() => handleDone(id)} className='icon'><MdDone /></span>
            <span  className='icon'><AiFillDelete /></span>
        </div>
    </form>
  )
}

export default SingleTodoItem