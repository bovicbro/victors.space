import React, {Component} from "react"

export default class Button extends React.Component{

onClick = () => {
  this.props.buttonAction();
}


  render() {
    return (
      <div>
        <button onClick={this.onClick}>{this.props.buttonText}</button>
      </div>
    );
  }
}
