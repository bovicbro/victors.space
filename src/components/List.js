import React, {Component} from "react";
import ListItem from "./ListItem"

export default class List extends React.Component {
  constructor() {
    super();
  } render() {
    return(
      <div>
        <ul>
          {this.props.listItems.map(function(listValue) {
            return <ListItem item={listValue} popItem={() => this.props.popItem()} />
          })}
        </ul>
      </div>
    )
  }
}
