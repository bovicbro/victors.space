const personReducer = (state = {
  personList: ["Victor Broman","Johannes Nemeth","Nils Eriksson","Christofer Ärleryd"],
  lastValues: []
}, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      state = {
        ...state,
        personList: [...state.personList, action.payload],
        lastValues: [...state.lastValues, state.personList]
      }
      break;
      case "REMOVE_PERSON":
        state = {
          ...state,
        personList: state.personList.pop(),
        lastValues: [...state.lastValues, state.personList]
        }
        break;
    default:
    break;

  }
  return state;
}

export default personReducer;
