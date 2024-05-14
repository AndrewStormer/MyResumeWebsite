import React from 'react'

//TODO: Put classes in a database? Easy to add to in the future

export default function RelevantCourseWork() {
  return (
    <div className="courseworkContainer">
      <h2>Relevant Coursework:</h2>

      <div className='courseList'>
        <ul>
        Course Number: Course Name (Grade)
          <li>CMP_SC 4520: Operating System (A)</li>
          <li>CMP_SC 4320: Software Engineering (A-)</li>
          <li>CMP_SC 4050: Design & Analysis of Algorithms I (A-)</li>
          <li>CMP_SC 3280: Database Applications & Information Systems (A)</li>
          <li>CMP_SC 3380: Object Oriented Programming (A)</li>
          <li>MATH 4120: Combinatorics & Graph Theory (A-)</li>
          <li>MATH 4310: Numerical Linear Algebra (B+)</li>
          <li>MATH 2320: Discrete Math Structures (A)</li>
          <li>STAT 4710: Introduction to Mathematical Statistics (A)</li>
          <li>INFOTC 4401: Python I (A)</li>
        </ul>
      </div>
    </div>
  )
}
