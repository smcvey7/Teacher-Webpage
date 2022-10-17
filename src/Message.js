import React from "react";

function Message({ info, currentUser }){
  return(
    <div className="messageItem">
      {info.content !== "default" ? <h4 className="noMargin">{currentUser.username} ({info.date})</h4> : <h4></h4>}
      <p>{info.content}</p>
      <h4>Mr. McVey:</h4>
      {info.response === "" ? <em>awaiting reply</em> : <p>{info.response}</p>}
    </div>
  )
}

export default Message