import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Layout from "./Layout";
import {connect} from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
      <Layout  />
      {
        this.props.name.name
      }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  math: state.math,
  name: state.name
};
};

const mapDispatchToProps = (dispatch) => {
  return {
  changeName: (name) => {
dispatch({
type: "CHANGE_NAME",
payload: name
});
}}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
