
import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, Switch, useHistory} from "react-router-dom"
import NavBar from './NavBar';
import Assignments from './Assignments';
import Grades from './Grades';
import Login from './Login';
import Messages from './Messages';
import Home from './Home';

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false)
  const [currentUser, setCurrentUser] = useState("guest")
  const history = useHistory()

  function handleLogIn(userInfo){
    fetch(`http://localhost:3000/users/`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      const userData = data.filter(user=>user.username === userInfo.username)
      if (userData.length === 0) alert(`Username ${userInfo.username} does not exist. Please try again or create an account.`)
      else if (userInfo.username !== userData[0].username || userInfo.password !== userData[0].password) {
        console.log("userData", userData)
        alert("Incorrect username/password combo. Please try again or create an account.")}
      else if (userInfo.username === userData[0].username && userInfo.password === userData[0].password){
        setIsLoggedIn(true)
        setCurrentUser(userData[0])
        history.push("/")
      }
    })
  }

  function handleLogOut(){
    setIsLoggedIn(false)
    setCurrentUser("guest")
    history.push("/login")
  }

  function createAccount(userInfo){
    const newUser = {
      username: userInfo.username,
      password: userInfo.password,
      onAssignment: 0,
      completed: [],
      messages: [
        {
          id: 1,
          content: "Welcome to Mr. McVey's classroom!"
        }
      ]
    }
    
    fetch(`http://localhost:3000/users/`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      const userData = data.filter(user=>user.username === userInfo.username)
      if (userData.length !== 0) alert(`Username ${userInfo.username} already taken. Please select a different username.`)
      else{
        fetch(`http://localhost:3000/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(newUser)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log("posted", data)
    })
        }
    })
  }
  
  return (
    <div>
    <NavBar isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
    <Switch>
      <Route exact path="/">
        <Home isLoggedIn={isLoggedIn} currentUser={currentUser.username} />
      </Route>
      <Route isLoggedIn={isLoggedIn} path="/assignments">
        <Assignments />
      </Route>
      <Route isLoggedIn={isLoggedIn} path="/grades">
        <Grades />
      </Route>
      <Route isLoggedIn={isLoggedIn} path="/messages">
        <Messages />
      </Route>
      <Route path="/login">
        <Login isLoggedIn={isLoggedIn} handleLogIn={handleLogIn} createAccount={createAccount} />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
