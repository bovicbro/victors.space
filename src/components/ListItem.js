import React, {Component} from "react";

export default class ListItem extends React.Component {
  constructor() {
    super();
  } render() {
    return(
      <li>
        {this.props.item}
      </li>
    )
  }
}
