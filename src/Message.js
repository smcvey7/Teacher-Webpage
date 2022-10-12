import React from "react";

function Message({ info, currentUser }){
  return(
    <div>
      <h4>From {currentUser.username} ({info.date})</h4>
      <p>{info.content}</p>
      <h3>Response from Mr. McVey</h3>
      {info.response === "" ? <em>awaiting reply</em> : <p>{info.response}</p>}
    </div>
  )
}

export default Message