const personActions = {
  addPerson : (person) => {
    return {
    type: "ADD_PERSON",
    payload: person
    }
  }
}

export default personActions;
