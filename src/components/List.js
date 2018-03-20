import React, {Component} from "react";
import ListItem from "./ListItem"

export default class List extends React.Component {
  constructor() {
    super();
  } render() {
    return(
      <div>
        <ul class="gridContainer">
          {this.props.listItems.map(function(listValue) {
            return <ListItem item={listValue.name}
              image={listValue.img}
              popItem={() => this.props.popItem()} />
          })}
        </ul>
      </div>
    )
  }
}
