import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Layout from "./Layout";

export default class App extends Component {
  render() {
    return (
      <div>
      <Layout result={this.props.math.result} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  math: state.math,
  user: state.user
};
};