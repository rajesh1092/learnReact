import React, { Component } from 'react';
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
//                          width : 450px;`       

class Person extends Component{
    render(){
        console.log('[Person.js] rendering...');
        return(
            <div className={classes.Person} >
                <p  onClick={this.props.click}> I am a {this.props.name} and i am {[this.props.age]} years old </p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.Change} value={this.props.name} />
            </div>       
        );

    }
};                   
    // const style = {
    //     '@media (min-width: 500px)':{
    //         width : '450px'
    //     }
    // }
 export default Person; 