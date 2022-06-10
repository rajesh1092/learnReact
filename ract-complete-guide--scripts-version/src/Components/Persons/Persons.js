import React, { PureComponent } from "react";
import Person from './Person/Person';

class Persons extends PureComponent{ 
// static  getDerivedStateFromProps(props, state){
//     console.log('[Persons.js] getDerivesStateFromProps')
//     return state
//   }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (nextProps.persons !== this.props.persons || 
  //       nextProps.click !== this.props.click || 
  //       nextProps.Change !== this.props.Change){
  //   return true;
  //   }else{
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforetUpdate');
    return {message: 'snapshot!'};
  }


  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  } 

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }
  
  render(){
  console.log('[Persons.js] rendering....');
  return this.props.persons.map((person, index) => {
    return(
    <Person
    click ={() =>this.props.click(index)}
    name = {person.name}
    age = {person.age}
    key = {person.id} 
    Change = {(event) => this.props.Change(event, person.id)}
    />
    );
  } );
};}
  export default Persons;