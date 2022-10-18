import React from "react";
import {NavLink, useHistory} from "react-router-dom"

function NavBar({ handleLogOut, isLoggedIn, currentUser }){
  const history = useHistory();

  return(
    <div id="navBar" className="flexContainer">
      <NavLink className="navLinks" to="/" exact>Home</NavLink>
      <NavLink className="navLinks" to="/assignments" >Assignments</NavLink>
      <NavLink className="navLinks" to="/grades" >Grades</NavLink>
      <NavLink className="navLinks" to="/messages" >Messages</NavLink>
      {isLoggedIn ? <NavLink className="navLinks" onClick={handleLogOut} to="/" >Logout</NavLink> : <NavLink className="navLinks" to="/login" >Login</NavLink>}
    </div>
  )
}

export default NavBar