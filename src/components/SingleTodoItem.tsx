import React from 'react'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import {Todo} from './Model'
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
    <li>{task}</li>
  )
}

export default SingleTodoItem