export const initialState = [{
  item: "Learn about reducers",
  completed: false,
  id: 3892987589,
}];


export const reducer = (state, action) => {
    switch (action.type) {
     
      case "ADD_ITEM":
        return [...state, 
            {item: action.payload,
            completed: false,  
            id: new Date()}]

      case "TOGGLE_COMPLETED":
        return state.map((todo) => {
          if(todo.id === action.payload){
            return {
              ...todo,
              completed: !todo.completed 
            }
          } else {
            return todo 
          }
        })

      case "CLEAR_COMPLETED":
        return state.filter((todo) => {
          if(todo.completed === false){
            return {
              ...todo
            }
          } return null 
        })

      default:
        return state;
    }
  };
  