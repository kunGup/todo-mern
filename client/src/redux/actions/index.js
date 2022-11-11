import * as actionTypes from './type'
import axios from 'axios'
const BASE_URL = 'http://localhost:8000'

export const addNewTodo = (data)=>async(dispatch)=>{
    try{
        const res = await axios.post(`${BASE_URL}/todos`, { data });
        dispatch({type:actionTypes.ADDNEW_TODO,payload:res.data})
    }
    catch(err){
        console.log('Err after calling addNewTodo',err.message);
    }
}

export const getAllTodo = () => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/todos`);
    dispatch({ type: actionTypes.GETALL_TODO, payload: res.data });
  } catch (err) {
    console.log("Err after calling getAllTodo", err.message);
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${BASE_URL}/todos/${id}`);
    dispatch({ type: actionTypes.TOGGLE_TODO, payload: res.data });
  } catch (err) {
    console.log("Err after calling toggleTodo", err.message);
  }
};

export const updateTodo = (id,data) => async (dispatch) => {
  try {
    const res = await axios.put(`${BASE_URL}/todos/${id}`,{data});
    dispatch({ type: actionTypes.UPDATE_TODO, payload: res.data });
  } catch (err) {
    console.log("Err after calling updateTodo", err.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${BASE_URL}/todos/${id}`);
    dispatch({ type: actionTypes.DELETE_TODO, payload: res.data });
  } catch (err) {
    console.log("Err after calling deleteTodo", err.message);
  }
};

export const toggleTabs = (tab)=>async(dispatch)=>{
  dispatch({type:actionTypes.TOGGLE_TAB,selected:tab})
}