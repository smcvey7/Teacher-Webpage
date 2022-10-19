import React, {useState} from "react";

function Assignment({assignmentInfo, userAssignment, saveSubmission}){
  const [submission, setSubmission]=useState(userAssignment === undefined ? "" : userAssignment.submission)
  const [isWorkingOn, setIsWorkingOn]=useState(false)
  

  function submitAssignment(e){
    e.preventDefault()
  }

  function handleChange(e){
    const entry = e.target.value
    setSubmission(entry)
  }

  function submitAssignment(e){
    e.preventDefault()
    const assignmentSubmission = {
      num : assignmentInfo === undefined ? "" : assignmentInfo.num,
      submission : submission,
      grade : "",
      completed: e.target.name === "save" ? false : true ,
      comments : "",
      isGraded : false,
      title: assignmentInfo.title,
      type: assignmentInfo.type,
      due: assignmentInfo.due,
      worth: assignmentInfo.worth,
      prompt: assignmentInfo.prompt
    }
    saveSubmission(assignmentSubmission)
    setIsWorkingOn(false)
  }

  if (userAssignment === undefined){
    return(
      <div>
        <h3>{assignmentInfo.num}-{assignmentInfo.title} ({assignmentInfo.worth} points possible)</h3>
        <small>{assignmentInfo.type}-Due: {assignmentInfo.due}</small>
        <p>{assignmentInfo.prompt}</p>
        {isWorkingOn ? 
        <form onSubmit={submitAssignment}>
          <textarea className="assignmentText" value={submission} onChange={handleChange}></textarea><br/>
        <button name="save" onClick={submitAssignment}>Save</button><input className="sendButton" type="submit" />
        </form>
        : <button onClick={()=>setIsWorkingOn(true)}>Create/edit submission</button>}
      </div>
    )
  } else{
    return(
      <div>
        <h3>{assignmentInfo.num}-{assignmentInfo.title} <strong className="completedScore">({userAssignment.grade}/{assignmentInfo.worth} points)</strong></h3>
        <small>{assignmentInfo.type}-Due: {assignmentInfo.due}</small>
        <p>{assignmentInfo.prompt}</p>
        <p><strong>Submission:</strong> {userAssignment.submission}</p>
        <p><strong>Teacher's Comments:</strong> {userAssignment.comments}</p>
        {isWorkingOn ? 
        <form onSubmit={submitAssignment}>
          <textarea className="assignmentText" onChange={handleChange} value={submission}></textarea><br/>
          <button name="save" onClick={submitAssignment}>Save</button><input className="sendButton" type="submit" />
        </form>
        : <div>
            <button onClick={()=>setIsWorkingOn(true)}>Edit submission</button>
          </div>
        }
      </div>
    )
  }
}

export default Assignment