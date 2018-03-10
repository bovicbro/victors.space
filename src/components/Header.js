import React from "react"

export default class Header extends React.Component {
  constructor() {
    super();
    this.name = "Victor"
  }
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
      </header>
    )
  }
}
