import React from "react";

const AddUsers=props=>{
    const addUserHandler=(event)=>{
        event.preventDefault();
    }
    return (
        <from onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type='text'/>
            <label htmlFor="age">Age (Year)</label>
            <input id="age" type='number'/>
            <button type="submit">Add User</button>
        </from>
    )
  
}

export default AddUsers