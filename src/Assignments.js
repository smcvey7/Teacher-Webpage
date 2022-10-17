import React, {useEffect, useState} from "react";
import Assignment from "./Assignment";

function Assignments({ isLoggedIn, currentUser, saveSubmission }){
  const [assignmentList, setAssignmentList]=useState([])
  const [onAssignment, setOnAssignment]=useState({})
  const [upcoming, setUpcoming]=useState([])

  useEffect(()=>{
    fetch(`http://localhost:3000/assignments/`, {
      method: "GET",
      headers: {
        "Content-type": "Application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      const assignments = data
      setAssignmentList(assignments)
    })
  }, [])

  const UpcomingAssignmentModules = assignmentList.map(item=>{
    if (isLoggedIn){
      const completed = currentUser.completed.includes(item.num)
      const isCurrent = item.num === currentUser.onAssignment
      if (!completed && !isCurrent){
        return (
        <li key={item.id}><Assignment saveSubmission={saveSubmission} assignmentInfo={item} /></li>
      )}
    }
  })

  const currentAssignmentModule = assignmentList.map(item=>{
    if (item.num === currentUser.onAssignment){
      return (
      <li key={item.id}><Assignment saveSubmission={saveSubmission} assignmentInfo={item} /></li>
    )}
  })

  const completedAssignmentModules = assignmentList.map(item=>{
    if (isLoggedIn){
      const completed = currentUser.completed.includes(item.num)
      const userAssignment = currentUser.userAssignments.filter(entry=>entry.num === item.num)
      if (completed){
        return (
        <li key={item.id}><Assignment saveSubmission={saveSubmission} assignmentInfo={item} userAssignment={userAssignment[0]} /></li>
      )}
    }
  })

  if (!isLoggedIn) return <p>Log in to view assignments</p>
  else return(
    <div className="componentFlexContainer" >
      <div className="moduleElement">
        <h2>Current assignment</h2>
        <ul>{currentAssignmentModule}</ul>
      </div>
      <div className="moduleElement">
        <h2>Upcoming assignments</h2>
        <ul>{UpcomingAssignmentModules}</ul>
      </div>
      <div className="moduleElement">
        <h2>Completed assignments</h2>
        <ul>{completedAssignmentModules}</ul>
      </div>
    </div>
  )
}

export default Assignments