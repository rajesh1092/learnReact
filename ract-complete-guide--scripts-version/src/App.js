import React, { Component } from "react";
import Person from './Person/Person';
import classes from"./App.module.css";
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
  state = {
    person: [
      {id:'as1', name: 'Max',age: 28 },
      {id:'as2', name: 'SId', age: 23},
      {id:'as3', name: 'stephenie', age: 21}
    ],
    showPersons: false
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
    const btnClasses = [classes.Button];
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
        {this.state.person.map((person, index) => {
          return<Person
          click ={() =>this.deletePersonHandler(index)}
          name = {person.name}
          age = {person.age}
          key = {person.id}
          Change = {(event) => this.nameChangeHandler(event, person.id)}
          />

        })} 
      </div>
    )
    btnClasses.push(classes.Red);
    // style.backgroundColor = 'red';
    // style[':hover'] = {
    //   backgroundColor: 'salmon',
    //   color: 'black'
    // }
  };
 


   const assignedClasses = [];
  if(this.state.person.length <= 2){
    assignedClasses.push(classes.red);
  }
  if (this.state.person.length<= 1){
    assignedClasses.push(classes.bold);
    assignedClasses.push(classes.font);
  }

    return (
     // <StyleRoot>      
        <div className={classes.App}>
        <h1>hi guys</h1>
        <p className={assignedClasses.join(' ')} >yeh! its workong</p>
        <button
        className = {btnClasses.join(' ')} onClick={this.togglePersonHandler}>Toggle button</button>
        {persons}         
      </div>
    //  </StyleRoot>

    );
  }
  // return React.createElement("div",{className: 'App'},  React.createElement("h1",null, "hi guys its react!!!"));
}

export default App;
