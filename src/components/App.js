import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {connect} from "react-redux";
import Header from "./Header"
import Footer from "./Footer"
import Button from "./Button"
import List from "./List"
import NameForm from "./NameForm"
import personActions from "../actions/personActions"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Button buttonText="+" buttonAction={() => this.props.addOne()} />
        <Button buttonText="-" buttonAction={() => this.props.subtractOne()} />
        <Button buttonText="JoNe" buttonAction={() => this.props.changeName("Johannes")} />
        <List listItems={this.props.person.personList} />
        <Footer name={this.props.math.result + "  " + this.props.name.name} />
        <Button buttonText="add Alba" buttonAction={()=> this.props.addPersonToList("Jessica Alba")} />
        <NameForm submitAction={(name) => this.props.addPersonToList(name)}/>
        <Button buttonText="pop" buttonAction={() => this.props.removePerson()} />
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
      dispatch({
        type: "CHANGE_NAME",
        payload: name
      });
    },
    addPersonToList: (person) => {dispatch(personActions.addPerson(person))},
    removePerson: () => {dispatch(personActions.removePerson())},
  }
  };

  export default connect(mapStateToProps, mapDispatchToProps)(App);
