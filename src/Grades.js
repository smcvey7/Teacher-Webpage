import React from "react";

function Grades({ isLoggedIn, currentUser }){
  if (!isLoggedIn) return <p>Log in to view grades</p>
  else return(
    <div></div>
  )
}

export default Grades