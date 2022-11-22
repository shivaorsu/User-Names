import React,{useState,Fragment} from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UsersList';


function App() {
  const [userslist,setUsersList]=useState([]);

  const addUserHandler=(uNmae,uAge)=>{
    setUsersList((prevUserList)=>{
      return [
        ...prevUserList, 
        {name:uNmae,age:uAge,id:Math.random().toString()}]
    })
  }
  return (
    <Fragment>
      <AddUsers onAddUser={addUserHandler}/>
      <UserList users={userslist}/>

    </Fragment>
  );
}

export default App;
