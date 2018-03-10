const nameReducer = (state = {
  name: "Victor",
  lastValues: []
}, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      console.log("Name reducer is alive and kicking");
      state = {
          ...state,
          name: action.payload,
          lastValues: [...state.lastValues, state.name]
      };
      break;
    case "DELETE":
      state = {
        ...state,
        name: "",
        lastValues: [...state.lastValues, state.name]
      }
      break;
  }
  return state;
};

export default nameReducer;
