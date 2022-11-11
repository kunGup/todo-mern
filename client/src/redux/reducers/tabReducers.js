import * as actionTypes from '../actions/type'

export const tabReducers = (state=actionTypes.ALL_TODO,action)=>{
    switch(action.type){
        case actionTypes.TOGGLE_TAB:
            return action.selected
        default:
            return state
    }
}