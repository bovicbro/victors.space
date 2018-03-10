import React from "react"

export default class Footer extends React.Component {
  constructor() {
    super();
    this.name = "Victor"
  }
  render() {
    return (
      <footer>
        <h1>footer and the name is: {this.props.name}</h1>
      </footer>
    )
  }
}
