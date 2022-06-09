import React from "react";

import classes from './cockpit.module.css';
const cockpit =(props) => {

    const assignedClasses = [];
    const btnClasses = [classes.Button];

    if (props.showPersons){
    btnClasses.push(classes.Red);
    }
    if(props.person.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (props.person.length<= 1){
      assignedClasses.push(classes.bold);
      assignedClasses.push(classes.font);
    }

    return(
        <div className={classes.cockpit}>
            <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')} >yeh! its working</p>
        <button
        className = {btnClasses.join(' ')} onClick={props.click}>Toggle button</button>
        
        </div>
    );
};

export default cockpit;