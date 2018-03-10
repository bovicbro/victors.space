import React, {Component} from "react";
import Button from "./Button"

export default class ListItem extends React.Component {
  constructor() {
    super();
  } render() {
    return(
      <li>
        {this.props.item} <Button buttonAction={() => {}}/>
      </li>
    )
  }
}
