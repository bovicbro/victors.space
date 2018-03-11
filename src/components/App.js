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
import mathAction from "../actions/mathAction"

const avatar = require('../img_avatar.png')
const alba = require('../alba.jpg')


class App extends Component {
  render() {
    return (
      <div class="mainContainer">
        <Header title="Plebbook" />
        <body>
          <div class="inputs">
            <Button buttonText="+" buttonAction={() => this.props.addOne()} />
            <Button buttonText="-" buttonAction={() => this.props.subtractOne()} />
            <Button buttonText="JoNe" buttonAction={() => this.props.changeName("Johannes")} />
            <Button buttonText="add Alba" buttonAction={()=> this.props.addPersonToList({name:"Jessica Alba", img: alba})} />
            <Button buttonText="pop" buttonAction={() => this.props.removePerson()} />
            <NameForm img={avatar} submitAction={(person) => this.props.addPersonToList(person)}/>
          </div>
          <div class="outputs">
            <List listItems={this.props.person.personList} />
          </div>
        </body>
        <Footer name={this.props.name.name} math={this.props.math.result} />
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
    changeName: (name) => {dispatch(personActions.changeName(name))},
    addOne: () => {dispatch(mathAction.addOne())},
    subtractOne: () => {dispatch(mathAction.subtractOne())},
    addPersonToList: (person) => {dispatch(personActions.addPerson(person))},
    removePerson: () => {dispatch(personActions.removePerson())},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
