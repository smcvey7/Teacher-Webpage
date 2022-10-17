import React, {useState} from "react";

function Grades({ isLoggedIn, currentUser }){
  const [received, setReceived]=useState(0)
  const [possible, setPossible]=useState(0)

  const assignmentEntries = currentUser.userAssignments.map(item=>{
    return <tr key={item.num}>
      <td>{item.num}</td>
      <td>{item.title}</td>
      <td>{item.isGraded ? item.grade : "-"}</td>
      <td>{item.worth}</td>
    </tr>
  })
  if (!isLoggedIn) return <p>Log in to view grades</p>
  else return(
    <div>
      <h2>Grades</h2>
      <table>
        <tbody>
          <tr>
            <th>Num</th>
            <th>Assigment</th>
            <th>Points received</th>
            <th>Points possible</th>
            <th>Percent</th>
          </tr>
          {assignmentEntries}
        </tbody>
      </table>
    </div>
  )
}


export default Grades