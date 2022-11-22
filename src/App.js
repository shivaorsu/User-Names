import React,{useState} from 'react';
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
    <div>
      <AddUsers onAddUser={addUserHandler}/>
      <UserList users={userslist}/>

    </div>
  );
}

export default App;
