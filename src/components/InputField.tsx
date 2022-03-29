import React from 'react'
import './styles.scss'
interface Props {
    task: string,
    setTask: React.Dispatch<React.SetStateAction<string>>
}
const InputField: React.FC<Props> = ({task, setTask}) => {
  return (
    <form className='input'>
        <input 
            className='input__box' 
            type="input" 
            placeholder='Enter a task'
            value={task}
            onChange={(e) => setTask(e.target.value)}
        />
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField