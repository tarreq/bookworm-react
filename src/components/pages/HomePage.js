import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <h1>Home Page!</h1>
      <div>
      <Link to="/login">Login</Link>
      </div>
      
      
      <div>
        <Link to="/slogin">Sample Login</Link>
      </div>
      
    </div>
  )
}

export default HomePage
