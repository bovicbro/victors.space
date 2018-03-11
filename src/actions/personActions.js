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
  }

}

export default personActions;
