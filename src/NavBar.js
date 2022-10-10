import React from "react";
import {NavLink, useHistory} from "react-router-dom"

function NavBar({ handleLogOut, isLoggedIn, currentUser }){
  const history = useHistory();

  return(
    <div id="navBar" className="flexContainer">
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/assignments" >Assignments</NavLink>
      <NavLink to="/grades" >Grades</NavLink>
      <NavLink to="/messages" >Messages</NavLink>
      {isLoggedIn ? <NavLink onClick={handleLogOut} to="/" >Logout</NavLink> : <NavLink to="/login" >Login</NavLink>}
    </div>
  )
}

export default NavBar