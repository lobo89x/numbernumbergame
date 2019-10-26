import React from 'react';
import { Link } from 'react-router-dom';

export default function Page404() {
  return (
    <div className="about-container card py-3">
      <div>
        <p className="text-center mb-1">What you're looking for isn't here</p>
        <div className="about-header d-flex justify-content-center align-items-center mb-0">
          <h3><span style={{ color: "#007bff", fontWeight: "bold" }}>404</span>Page</h3>
        </div>
        <div className="about-body text-center mb-0">
          <span>Let's get you</span> <Link style={{ fontWeight: "bold" }} to="/landingPage">Home</Link>
        </div>
      </div>
    </div>
  )
}