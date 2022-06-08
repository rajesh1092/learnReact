import React from 'react';
//import styled from 'styled-components';
import classes from"./Person.module.css";
// const StyleDiv =  styled.div`
//                     width: 60%;
//                     margin: 16px auto;
//                     box-shadow: 0 2px 3px #ccc;
//                     border: 1px solid #eee;
//                     padding: 16px;
//                     text-align: center;

//                      @media (min-width: 500px) {
//                          width : 450px;       
//                     `
const person = (props) =>{
    // const style = {
    //     '@media (min-width: 500px)':{
    //         width : '450px'
    //     }
    // }
    return(
        <div className={classes.Person} >
        
            <p  onClick={props.click}> I am a {props.name} and i am {[props.age]} years old </p>
            <p>{props.children}</p>
            <input type='text' onChange={props.Change} value={props.name} />
        </div>       
    )
}

 export default person; 