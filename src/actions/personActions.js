const personActions = {
  addPerson : (person) => {
    return {
    type: "ADD_PERSON",
    payload: person
    }
  }
}
console.log(personActions.addPerson("HEJEHEJE"));

export default personActions;
