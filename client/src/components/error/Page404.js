<<<<<<< HEAD:src/components/error/Page404.js
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
=======
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
          <span>Let's get you</span> <Link style={{ fontWeight: "bold" }} to="/Login">Login</Link>
        </div>
      </div>
    </div>
  )
>>>>>>> 0131bcf51e73c34097866a417618e2e1e8a136b9:client/src/components/error/Page404.js
}