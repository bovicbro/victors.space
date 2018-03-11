import React, {Component} from "react";
import Button from "./Button"

export default class ListItem extends React.Component {
  constructor() {
    super();
  } render() {
    return(
      <li>
        <div class="card">
          <img src={this.props.image}></img>
          <div class="cardContainer">
          {this.props.item} <Button buttonAction={() => {}}/>
          </div>
      </div>
      </li>
    )
  }
}
