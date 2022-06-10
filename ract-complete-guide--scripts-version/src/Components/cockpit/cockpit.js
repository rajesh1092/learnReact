import React, { useEffect } from "react";

import classes from "./cockpit.module.css";
const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    setTimeout(()=> {
      alert('saved data to cloud!!')
    }, 1000);
    return () => {
      console.log('[Cockpit.js] clean up by useEffect');
    };
  }, []);

  useEffect(()=> {
    console.log('[Cockpit.js] 2nd use Effect');
    return () => {
      console.log('[Cockpit.js] clean up work by 2nd useEffect');
    }});


  const assignedClasses = [];
  const btnClasses = [classes.Button];
  if (props.showPersons) {
    btnClasses.push(classes.Red);
  }
  if (props.personLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personLength <= 1) {
    assignedClasses.push(classes.bold);
    assignedClasses.push(classes.font);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>yeh! its working</p>
      <button className={btnClasses.join(" ")} onClick={props.click}>
        Toggle button
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
