import React from "react";

function Message({ info, currentUser }){
  return(
    <div>
      <h3>From {currentUser.username}</h3>
      <p>{info.content}</p>
      <h3>Response from Mr. McVey</h3>
      {info.response === "" ? <em>awaiting reply</em> : <p>{info.response}</p>}
    </div>
  )
}

export default Message