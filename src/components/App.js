import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {connect} from "react-redux";
import Header from "./Header"
import Footer from "./Footer"
import Button from "./Button"
import List from "./List"
import personActions from "../actions/personActions"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Button buttonText="+" buttonAction={() => this.props.addOne()} />
        <Button buttonText="-" buttonAction={() => this.props.subtractOne()} />
        <Button buttonText="Change name to Johannes" buttonAction={() => this.props.changeName("Johannes")} />
        <List listItems={this.props.person.personList} />
        <Footer name={this.props.math.result + "  " + this.props.name.name} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    math: state.math,
    name: state.name,
    person: state.person
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOne: () => {
      dispatch({
        type: "ADD",
        payload: 1
      });
    },
    subtractOne: () => {
      dispatch({
        type: "SUBTRACT",
        payload: 1
      });
    },

    changeName: (name) => {
      console.log("dispatch line: " + name);
      dispatch({
        type: "CHANGE_NAME",
        payload: name
      });
    },
    addPersonToList: (person) => {dispatch(personActions.addPerson(person))},
  }
  };

  export default connect(mapStateToProps, mapDispatchToProps)(App);
