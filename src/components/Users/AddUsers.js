import React from "react";

import Card from "../UI/Card";

import classes from './AddUser.module.css';

const AddUsers=props=>{
    const addUserHandler=(event)=>{
        event.preventDefault();
    }
    return (
        <Card  className={classes.input}>
        <from onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type='text'/>
            <label htmlFor="age">Age (Year)</label>
            <input id="age" type='number'/>
            <button type="submit">Add User</button>
        </from>
        </Card>
    )
  
}

export default AddUsers