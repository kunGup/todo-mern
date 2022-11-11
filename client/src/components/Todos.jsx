import React from 'react'
import * as actionTypes from '../redux/actions/type'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodo,deleteTodo } from '../redux/actions'
import Tabs from './Tabs'
import Todo from './Todo'
function Todos() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)
  const currentTab = useSelector(state=>state.currentTab)
  useEffect(()=>{
    dispatch(getAllTodo())
  })

  const getTodos = ()=>{
    if(currentTab===actionTypes.ALL_TODO){
      return todos
    }
    else if(currentTab===actionTypes.ACTIVE_TODO){
      return todos.filter(todo=>!todo.done)
    }
    else{
      return todos.filter(todo=>todo.done)
    }
  }

  function removeDoneTodos(){
    todos.forEach(todo=>{
      
      todo.done && dispatch(deleteTodo(todo._id))
    })
  }
  return (
    <article>
      <div>
        <Tabs currentTab={currentTab}/>
        {
          todos.some(todo=>todo.done)?(
            <button className='button clear' onClick={removeDoneTodos}>
              Delete done todos
            </button>
          ):null
        }
      </div>
      <ul>
        {getTodos().map((todo) => (
          <Todo key={todo._id} todo={todo}/>
        ))}
      </ul>
    </article>
  );
}

export default Todos