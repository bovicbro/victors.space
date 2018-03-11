const mathAction = {
  addOne : () => {
    return {
    type: "ADD",
    payload: 1
    }
  },
  subtractOne: () => {
    return {
      type: "SUBTRACT",
      payload: 1
    }
  }
}

export default mathAction;
