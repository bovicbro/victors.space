import React from "react"

export default class Footer extends React.Component {
  constructor() {
    super();
    this.name = "Victor"
  }
  render() {
    return (
      <footer class="footer">
        <h1>{this.props.math}</h1>
        <h1>{this.props.name}</h1>
      </footer>
    )
  }
}
