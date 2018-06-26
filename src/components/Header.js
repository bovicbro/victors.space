import React from "react";

export default class Header extends React.Component {

  constructor() {
    super();
    this.name = "Victor"
  }

  render() {
    return (
      <div class="header">
        <h1>This is header</h1>
     </div>
    )
  }

}
