import React, {useState} from "react";

function Login({ isLoggedIn, handleLogIn }){
  const [userInfo, setUserInfo] =useState({
    username: "",
    password: ""
  })

  function handleChange(e){
    const updatedInfo = {
      ...userInfo,
      [e.target.name]: e.target.value
    }
    setUserInfo(updatedInfo)
  }

  function onSubmitClick(e){
    e.preventDefault();
    if (userInfo.username ==="" || userInfo.password==="") alert("Fields cannot be blank")
    else {
      handleLogIn(userInfo)
      setUserInfo({
        username: "",
        password: ""
      })
    }
  }


  if (!isLoggedIn) return(
    <div>
      <form id="logInForm" onSubmit={onSubmitClick}>
        username:<input value={userInfo.username} name="username" onChange={handleChange}/>
        password:<input type="password" name="password" value={userInfo.password} onChange={handleChange}/>
        <p>Create an account here</p>
        <button id="submitLogIn">Submit</button>
      </form>
    </div>
  )
}

export default Login