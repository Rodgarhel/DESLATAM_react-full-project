import React from 'react'
import { Link } from 'react-router-dom'


function NotFound() {
  return (
    <div className='notFound'>
      
      <h1>Error 404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">
        <button className='btn btn-dark'><strong>Home</strong></button>
      </Link>
    </div>
  )
}

export default NotFound;
