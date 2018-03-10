import React, {Component} from "react"

export default class Button extends React.Component{
  render() {
    return (
      <div>
        <button onClick={this.props.buttonAction()}>{this.props.buttonText}</button>
      </div>
    );
  }
}
