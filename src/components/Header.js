import React from "react"

export default class Header extends React.Component {
  constructor() {
    super();
    this.name = "Victor"
  }
  render() {
    return (
      <div class="header">
          <div class="logo"></div>
          <btn>Hej</btn>
          <btn>Hej</btn>
          <btn>Hej</btn>
      </div>
    )
  }
}
