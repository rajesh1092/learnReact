import React, { Component } from 'react';
import Persons from '../Components/Persons/Persons';
import classes from './App.module.css';
import Cockpit from '../Components/cockpit/cockpit';
//import ErrorBoundry from '../Errorboundry/ErrorBoundry';
//import styled from 'styled-components';

// //const StyledButton = styled.button`
//                         background-color: ${props => props.alt ? 'red' : 'green'};
//                         color: white;
//                         font: inherit;
//                         border: 1px solid blue;
//                         padding: 8px;
//                         cursor:pointer;
                       

//                         &:hover {
//                           background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//                           color : black;
//                         }`;

// const StyledP = styled.p`
//                     color: ${props => props.char<=2  && 'red' };
//                     font-weight: ${props => props.char<=1  && 'bold'};
                   // `
class App extends Component {

  constructor (props){
    super (props);
    console.log('[App.js] constructor');
  }
  // state can be declared  in constructor using this.state 
  // below is the new method to construct a state vvv
  //***** after constructor getderivedFromState works VVV
  state = {
    person: [
      {id:'as1', name: 'Max',age: 28 },
      {id:'as2', name: 'SId', age: 23},
      {id:'as3', name: 'stephenie', age: 21}
    ],
    showPersons: false,
    showCockpit: true
  } 
  //***** after constructor getderivedFromState works VVV
  // add static is important so can react can execute this static method
  //***** after getderivedFromState works render method VVV
  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

//*****componentwillmount used historically and it still exists  
// it called before componentdidmount and works as setting state  
  // componentWillMount(){
  //   console.log('[App.js] componentWillMount');
  // }
  
  //***after rendering childelements componentdidmount() executes
  // WE use componentdidmount to make http request bu not here
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  //lifecycle for internal changes when the state changes
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
  } 
  // switchEventHandler = (newName) => {
  //   //console.log('switch');
  //  // dont use this: this.state.person[0].name= 'Maxmilian';
  //  this.setState({
  //   person: [
  //     { name: newName ,age: 28 },
  //     { name: 'SId', age: 23},
  //     { name: 'stephenie', age: 16}
  //   ]
  //  })
  // }
  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.person.findIndex(p =>{
      return p.id === id;
    });
    const person ={ ...this.state.person[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;
    this.setState({ person :persons});
     
  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.person;
    const persons = [...this.state.person]; 
    persons.splice(personIndex, 1);
    this.setState ({person: persons});
  }
  
  togglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState ({ showPersons: !doesShow}); 
  }

  

  render() {    
  //***** after getderivedFromState works render method VVV
  console.log('[App.js] render');

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border:'1px solid blue',
    //   padding: '8px',
    //   cursor:'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color : 'black'
    //   }
    // };
    let persons = null;
    if(this.state.showPersons){
      persons =(
      <div>
        <Persons
        persons ={this.state.person}
        click = {this.deletePersonHandler}
        Change = {this.nameChangeHandler} />
      </div>
    );  
    // style.backgroundColor = 'red';
    // style[':hover'] = {
    //   backgroundColor: 'salmon',
    //   color: 'black'
    // }
  };
    return (
     // <StyleRoot>      
        <div className={classes.App}>
          <button onClick={()=> {
            this.setState({showCockpit: false})
          }}>
            Remove cockpit
          </button>
         {this.state.showCockpit ? (<Cockpit 
         title = {this.props.appTitle}
         showPersons={this.state.showPersons}
         personLength = {this.state.person.length}
         click = {this.togglePersonHandler}
         />) : null }  
         {persons}   
      </div>
    //  </StyleRoot>
    );
  }
  // return React.createElement("div",{className: 'App'},  React.createElement("h1",null, "hi guys its react!!!"));
}
export default App;
