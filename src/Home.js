import React from "react";
import { NavLink } from "react-router-dom"

function Home({ isLoggedIn, currentUser }){
  

  if (!isLoggedIn) return(
    <div>
      <h1>Welcome to Mr. McVey's class</h1>
      <p>Please <NavLink to="/login" exact>login</NavLink> to access your grades and assignments.</p>
    </div>
  ) 
  else return(
    <div>
      <h1>Welcome to Mr. McVey's class, {currentUser}</h1>
      <h2>Weekly calendar</h2>
      <table>
        <tbody>
          <tr>
            <th>Day</th>
            <th>Before Class</th>
            <th>During Class</th>
            <th>Homework</th>
            <th>Quiz/Test</th>
          </tr>
          <tr>
            <td>Mon 10/17</td>
            <td>Read pg 30-35</td>
            <td>Conversation practice-ordering food</td>
            <td>HW book pg 15-16</td>
            <td>Section 2 listening quiz</td>
          </tr>
          <tr>
            <td>Tues 10/18</td>
            <td>Read pg 30-35</td>
            <td>Conversation practice-ordering food</td>
            <td>HW book pg 15-16</td>
            <td>Section 2 listening quiz</td>
          </tr>
          <tr>
            <td>Wed 10/19</td>
            <td>Read pg 30-35</td>
            <td>Conversation practice-ordering food</td>
            <td>HW book pg 15-16</td>
            <td>Section 2 listening quiz</td>
          </tr>
          <tr>
            <td>Thurs 10/20</td>
            <td>Read pg 30-35</td>
            <td>Conversation practice-ordering food</td>
            <td>HW book pg 15-16</td>
            <td>Section 2 listening quiz</td>
          </tr>
          <tr>
            <td>Fri 10/21</td>
            <td>Read pg 30-35</td>
            <td>Conversation practice-ordering food</td>
            <td>HW book pg 15-16</td>
            <td>Section 2 listening quiz</td>
          </tr>
        </tbody>
      </table>
      <h2>Announcements</h2>
      <ul>
        <li>No class next Mon/Tues (10/24-25) for Fall Break!</li>
        <li>Movie night Thurs (10/20) at 6:30<br/>Film: Crouching Tiger, Hidden Dragon</li>
      </ul>
    </div>
  )
}

export default Home