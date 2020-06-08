// Build a form to add todos to your list
// Build a function that will dispatch an action to add a new todo
// Write the case in your reducer for adding a todo (You can create a unique id with new Date())

import React, { useState, useReducer } from "react";
import '../App.css';


import { reducer, initialState } from "../reducers/reducer";

export const TodoForm = () => {
  const [newItem, setNewItem] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = (e) => {
    setNewItem(e.target.value);
  };

  return (
    <div>
      <input
        className="todoItem-input"
        type="text"
        name="newTodoItem"
        value={newItem}
        onChange={handleChanges}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD_ITEM", payload: newItem });
          setNewItem("");
        }}>
        Add Task
      </button>

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
    </div>
  );
};
