const personActions = {
  addPerson : (person) => {
    return {
    type: "ADD_PERSON",
    payload: {
      name: person.name,
      img: person.img
    }
    }
  },
  removePerson: () => {
    return {
      type: "REMOVE_PERSON",
    }
  },
  changeName: (name) => {
    return {
      type: "CHANGE_NAME",
      payload: name
    }
  },
  removePersonByIndex: (index) => {
    return {
      type: "REMOVE_PERSON_BY_INDEX",
      payload: index
    };
  },
  duplicatePersonByIndex: (index) => {
    return {
      type: "DUPLICATE_PERSON_BY_INDEX",
      payload: index
    }
  }

}

export default personActions;
