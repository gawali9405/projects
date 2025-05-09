import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer bg-dark text-light py-4">
    <div className="container text-center">
      <p className="mb-0">&copy; 2025 Your Company. All Rights Reserved.</p>
      <div className=" footer mt-2">
        <Link to='/policy' className="text-light me-3">Privacy Policy</Link> 
        <Link to='/term_and_service' className="text-light me-3">Terms of Service</Link> 
        <Link to='/contact' className="text-light">Contact</Link>
      </div>
    </div>
  </div>
  
  )
}

export default Footer