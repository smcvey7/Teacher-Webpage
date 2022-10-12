import React, {useEffect, useState} from "react";
import Assignment from "./Assignment";

function Assignments({ isLoggedIn, currentUser }){
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
        <li key={item.id}><Assignment assignmentInfo={item} /></li>
      )}
    }
  })

  const currentAssignmentModule = assignmentList.map(item=>{
    if (item.num === currentUser.onAssignment){
      return (
      <li key={item.id}><Assignment assignmentInfo={item} /></li>
    )}
  })

  const completedAssignmentModules = assignmentList.map(item=>{
    if (isLoggedIn){
      const completed = currentUser.completed.includes(item.num)
      if (completed){
        return (
        <li key={item.id}><Assignment assignmentInfo={item} /></li>
      )}
    }
  })

  if (!isLoggedIn) return <p>Log in to view assignments</p>
  else return(
    <div>
      <h2>Current assignment</h2>
      <ul>{currentAssignmentModule}</ul>
      <h2>Upcoming assignments</h2>
      <div>
      <ul>{UpcomingAssignmentModules}</ul>
      </div>
      <h2>Completed assignments</h2>
      <div>
      <ul>{completedAssignmentModules}</ul>
      </div>
    </div>
  )
}

export default Assignments