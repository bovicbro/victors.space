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
          <div class="name">
          {this.props.item}
          </div>
           <Button
            buttonText="Duplicate"
            buttonAction={this.props.duplicatePersonByIndex}
            index={this.props.index}
          />
          <Button
            buttonText="Remove"
            buttonAction={this.props.removePersonByIndex}
            index={this.props.index}
            type="warning"
          />
          <Button
            buttonText="Update"
            buttonAction={this.props.removePersonByIndex}
            index={this.props.index}
            type="update"
          />
        </div>
      </div>
      </li>
    )
  }
}
