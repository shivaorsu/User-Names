import React,{useState,Fragment} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';


function App() {
  const [userslist,setUsersList]=useState([]);

  const addUserHandler=(uNmae,uAge,uCollegename)=>{
    setUsersList((prevUserList)=>{
      return [
        ...prevUserList, 
        {name:uNmae,age:uAge,collegename:uCollegename,id:Math.random().toString()}]
    })
  }
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userslist}/>

    </Fragment>
  );
}

export default App;
