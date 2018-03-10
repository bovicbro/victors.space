const personReducer = (state = {
  personList: ["Victor Broman","Johannes Nemeth","Nils Eriksson"],
  lastValues: []
}, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      state = {
        ...state,
        personList: [...state.personlist, action.payload],
        lastValues: [...state.lastValues, state.personlist]
      }
      break;
    default:
    break;

  }
  return state;
}

export default personReducer;
