import React from "react";
import {NavLink, useHistory} from "react-router-dom"

function NavBar(){
  const history = useHistory();

  return(
    <div id="navBar" className="flexContainer">
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/assignments" exact>Assignments</NavLink>
      <NavLink to="/grades" exact>Grades</NavLink>
      <NavLink to="/messages" exact>Messages</NavLink>
      <NavLink to="/login" exact>Login</NavLink>
    </div>
  )
}

export default NavBar