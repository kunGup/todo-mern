import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../redux/actions'
function Todoform() {
  const [text,setText] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(addNewTodo(text))
    setText('')
  }
  const handleInput = (e)=>{
    setText(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter new todo...' className='input' onChange={handleInput} value={text}/>
    </form>
  )
}

export default Todoform