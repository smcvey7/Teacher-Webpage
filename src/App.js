
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
  const [currentUser, setCurrentUser] = useState({})
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
        alert("Incorrect username/password combo. Please try again or create an account.")}
      else if (userInfo.username === userData[0].username && userInfo.password === userData[0].password){
        setCurrentUser(userData[0])
        setIsLoggedIn(true)
        history.push("/")
      }
    })
  }

  function handleLogOut(){
    setIsLoggedIn(false)
    setCurrentUser({})
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

  function updateMessages(newMessage){
    fetch(`http://localhost:3000/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "Application/json"
      },
      body: JSON.stringify({
        messages: [
          ...currentUser.messages,
          newMessage
        ]
      })
    })
    .then(res=>res.json())
    .then(data=>setCurrentUser({
      ...currentUser,
      messages: [
        ...currentUser.messages,
        data
      ]
    }))
  }

  return (
    <div>
    <NavBar isLoggedIn={isLoggedIn} handleLogOut={handleLogOut} />
    <Switch>
      <Route exact path="/">
        <Home isLoggedIn={isLoggedIn} currentUser={currentUser} />
      </Route>
      <Route exact path="/assignments">
        <Assignments isLoggedIn={isLoggedIn} currentUser={currentUser} />
      </Route>
      <Route exact path="/grades" >
        <Grades isLoggedIn={isLoggedIn} currentUser={currentUser} />
      </Route>
      <Route exact path="/messages" >
        <Messages isLoggedIn={isLoggedIn} currentUser={currentUser} updateMessages={updateMessages} />
      </Route>
      <Route exact path="/login">
        <Login isLoggedIn={isLoggedIn} handleLogIn={handleLogIn} createAccount={createAccount} />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
