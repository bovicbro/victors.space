import React, {Component} from "react"

export default class Button extends React.Component{

onClick = () => {
  this.props.buttonAction(this.props.index);
}

  render() {
    return (
        <button class={this.props.type} onClick={this.onClick}>{this.props.buttonText}</button>
    );
  }

}
