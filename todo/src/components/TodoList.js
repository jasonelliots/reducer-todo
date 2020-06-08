import React, { useReducer } from "react";

import { reducer, initialState } from '../reducers/reducer'


export const TodoList = () => {

const [state, dispatch] = useReducer(reducer, initialState)


return (
    <div>
    {console.log(state)}
    {state.map((todo) => {
      return (
        <div>
      <div className={`${todo.completed? "completed": ""}`}>{todo.item}</div> 
      <button
    onClick={() => {
      dispatch({ type: "TOGGLE_COMPLETED", payload: todo.id});
    }}>
    Mark Complete
  </button>
      </div>
      )})}
  </div>
  <div>
    <button onClick={() => {
      dispatch({ type: "CLEAR_COMPLETED"})
    }}> Clear Completed</button>
  </div>

)

}