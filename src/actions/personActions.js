const personActions = {
  addPerson : (person) => {
    return {
    type: "ADD_PERSON",
    payload: person
    }
  },
  removePerson: () => {
    return {
      type: "REMOVE_PERSON",
    }
  }
}
console.log(personActions.addPerson("HEJEHEJE"));

export default personActions;
