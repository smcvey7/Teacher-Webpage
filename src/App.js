import logo from './logo.svg';
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
    console.log("userinfo", userInfo)
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
        alert("Welcome!")
        setCurrentUser(userData[0])
        // history.push("/")
      }
    })
  }
  
  return (
    <div>
    <NavBar isLoggedIn={isLoggedIn} />
    <Switch>
      <Route exact path="/">
        <Home isLoggedIn={isLoggedIn} />
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
        <Login isLoggedIn={isLoggedIn} handleLogIn={handleLogIn} />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
