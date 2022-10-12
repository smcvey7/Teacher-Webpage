import React, {useState} from "react";

function Assignment({assignmentInfo}){
  const [submission, setSubmission]=useState(assignmentInfo.submission)
  const [isWorkingOn, setIsWorkingOn]=useState(false)

  function submitAssignment(e){
    e.preventDefault()
  }

  return(
    <div>
      <h3>{assignmentInfo.num}-{assignmentInfo.title} ({assignmentInfo.worth}points)</h3>
      <small>({assignmentInfo.type})</small>
      <small>({assignmentInfo.due})</small>
      <p>{assignmentInfo.prompt}</p>
      {isWorkingOn ? 
      <form>
        <textarea></textarea><br/>
      <button>Save</button><input type="submit" />
      </form>
      : <button onClick={()=>setIsWorkingOn(true)}>Create/edit submission</button>}
    </div>
  )
}

export default Assignment