import React, {Component} from "react";
import ListItem from "./ListItem"

export default class List extends React.Component {
  constructor() {
    super();
  } render() {
    return(
      <div>
        <ul>
          <ListItem item={this.props.listItems[0]} />
          <ListItem item={this.props.listItems[1]} />
          <ListItem item={this.props.listItems[2]} />
        </ul>
      </div>
    )
  }
}
