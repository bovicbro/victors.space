const mathReducer = (state = {
  result: 1,
  lastValues: []
}, action) => {
  switch (action.type) {
    case "ADD":
      state = {
          ...state,
          result: state.result + action.payload,
          lastValues: [...state.lastValues, state.result]
      };
      break;
    case "DELETE":
// something
      break;
  }
  return state;
};

export default mathReducer;
