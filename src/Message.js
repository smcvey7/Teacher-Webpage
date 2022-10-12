import React from "react";

function Message({ info, currentUser }){
  return(
    <div>
      <h4>{currentUser.username} ({info.date})</h4>
      <p>{info.content}</p>
      <h4>Mr. McVey:</h4>
      {info.response === "" ? <em>awaiting reply</em> : <p>{info.response}</p>}
    </div>
  )
}

export default Message