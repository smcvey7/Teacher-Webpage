import React, {useState} from "react";
import Message from "./Message";

function Messages({ isLoggedIn, currentUser, updateMessages }){
  const [messages, setMessages]=useState([])
  const [messageContent, setMessageContent]=useState("")
  const [sendNew, setSendNew]=useState(false)
  
  function getMessages(){
    if (currentUser.messages !== undefined){
      setMessages(currentUser.messages)
    }
  }

  function onChange(e){
    const newMessage = {
      sender: currentUser.username,
      hasResponse: false,
      content: e.target.value,
      response: ""
    }

    setMessageContent(newMessage)
  }

  function handleMessageSubmit(e){
    e.preventDefault()
    updateMessages(messageContent)
    setMessageContent("")
  }
  

  const messageModules = messages.map(message=>{
    return <li key={message.id}><Message currentUser={currentUser} info = {message} /></li>
  })

  if (!isLoggedIn) return <p>Log in to view messages</p>
  else return(
    <div>
      <button onClick={getMessages}>Get messages</button><button onClick={()=>setSendNew(true)} >New message</button>
      {sendNew ? 
      <form onSubmit={handleMessageSubmit}>
        <h2>New Message</h2>
        <textarea onChange={onChange} >{messageContent}</textarea><br/>
        <input type="submit" />
      </form> : <p></p>}
      <ul>{messageModules}</ul>
    </div>
  )
}

export default Messages