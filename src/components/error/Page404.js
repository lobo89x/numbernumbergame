import React from 'react';
import { Link } from 'react-router-dom';

export default function Page404() {
  return (
    <div className="mt-20">
      <div>
    <h1 className="text-center"><span  style={{ color: "#007bff", fontWeight: "bold" }}>404</span>Page</h1>
       <h1> <p className="text-center mb-1">What you're looking for isn't here</p> </h1>
        <div className="align-items-center mb-0">
        </div>
        <div className="about-body text-center mb-0">
        <h1><Link style={{ fontWeight: "bold" }} to="/Login">Log In Here</Link></h1>
        </div>
      </div>
    </div>
  )
}