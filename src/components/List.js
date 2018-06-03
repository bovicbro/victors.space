import React, {Component} from "react";
import ListItem from "./ListItem"

export default class List extends React.Component {
  constructor() {
    super();
  } render() {
    const removePersonByIndex = this.props.removePersonByIndex;
    return(
      <div>
        <ul class="gridContainer">
          {this.props.listItems.map(function(listValue, index) {
            return <ListItem item={listValue.name}
              image={listValue.img}
              removePersonByIndex={removePersonByIndex}
              index={index}
              />
          })}
        </ul>
      </div>
    )
  }
}
