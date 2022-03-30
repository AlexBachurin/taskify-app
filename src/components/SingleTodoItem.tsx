import React, {useRef, useState, useEffect} from 'react'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import {Todo} from './Model'
import './styles.scss'
import {Draggable} from 'react-beautiful-dnd'
interface Props {
    id: Todo['id'],
    task: Todo['task'],
    isDone: Todo['isDone']
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    key: number,
    index: number
}
const SingleTodoItem: React.FC<Props> = ({id, task, isDone, setTodos, todos, index}) => {
    //edit state
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [editTask, setEditTask] = useState<string>(task)
    const inputRef = useRef<HTMLInputElement>(null);
    //MARK AS DONE
    const handleDone = (itemId : number) => {
        //find todo to mark as done, toggle isDone property,return new array
        setTodos(todos.map(item => {
            if(item.id === itemId) {
                return {...item, isDone: !item.isDone}
            }
            return item;
        }))
        
    }
    //DELETE TASK
    const deleteTask = (itemId: number) => {
        const filtered = todos.filter(item => item.id !== itemId);
        setTodos(filtered)
    }
    //EDIT TASK
    const editTaskHandler = () => {
        setIsEdit(true);
    }
    const handleEdit = (e: React.FormEvent<HTMLInputElement>) => {
        setEditTask(e.currentTarget.value)
    }
    const changeTask = (e: React.FormEvent) => {
        e.preventDefault()
        setIsEdit(false)
    }

    //focus on input on edit
    useEffect(() => {
      inputRef?.current?.focus();
     
    }, [isEdit])
    

  return (
    <Draggable draggableId={id.toString()} index={index}>
        {
            (provided, snapshot) => (

            <form 
                onSubmit={changeTask} 
                className={`todos__single ${snapshot.isDragging? 'drag': ''}`} 
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
            >
                {isEdit? 
                <input 
                    ref={inputRef}
                    className='todos__single-text' 
                    onChange={handleEdit} 
                    value={editTask} 
                    type="text" 
                    placeholder={editTask}
                />
                : <span className={isDone ? 'todos__single-text_strike' : 'todos__single-text'}>
                    {editTask}
                </span>
                }
                
                <div>
                    <span onClick={editTaskHandler} className='icon'><AiFillEdit/></span>
                    <span  onClick={() => handleDone(id)} className='icon'><MdDone /></span>
                    <span  onClick={() => deleteTask(id)} className='icon'><AiFillDelete /></span>
                </div>
            </form>
            )
        }
        
    </Draggable>
  )
}

export default SingleTodoItem