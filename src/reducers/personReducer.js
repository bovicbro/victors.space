const personReducer = (state = {
    personList: [],
}, action) => {
  switch (action.type) {

    case "ADD_PERSON":
    state = {
      ...state,
      personList: state.personList.concat({
        name: action.payload.name,
        img: action.payload.img
      }),
    };
    break;

    case "REMOVE_PERSON":
    console.log("removing person");
    state.personList.pop();
    state = {
      ...state,
      personList: state.personList,
    }
    break;

    default:
    break;

  }
  return state;
}

export default personReducer;
