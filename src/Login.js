import React, {useState} from "react";

function Login({ isLoggedIn, handleLogIn, createAccount }){
  const [userInfo, setUserInfo] =useState({
    username: "",
    password: ""
  })
  const [hasAccount, setHasAccount]=useState(true)

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

  function onCreateAccountClick(e){
    e.preventDefault();
    if (userInfo.username ==="" || userInfo.password==="") alert("Fields cannot be blank")
    else {
      createAccount(userInfo)
      setUserInfo({
        ...userInfo,
        password: ""
      })
      setHasAccount(true)
    }
  }


  if (!isLoggedIn) return(
    hasAccount ? <div>
      <h1>Login</h1>
      <form id="logInForm" onSubmit={onSubmitClick}>
        username:<input value={userInfo.username} name="username" onChange={handleChange}/>
        password:<input type="password" name="password" value={userInfo.password} onChange={handleChange}/><button id="submitLogIn">Submit</button><br/>
        <a className="clickLink" onClick={()=>setHasAccount(false)}>Create an account here</a><br/>
      </form>
    </div>
    :
    <div>
      <h1>Create Account</h1>
      <form id="createAccountForm" onSubmit={onCreateAccountClick}>
        username:<input value={userInfo.username} name="username" onChange={handleChange}/>
        password:<input type="password" name="password" value={userInfo.password} onChange={handleChange}/><button id="submitCreateAccount">Submit</button><br/>
        <a className="clickLink" onClick={()=>setHasAccount(true)}>Have an account? Login here</a><br/>
      </form>
    </div>
  )
}

export default Login