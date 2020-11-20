import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="blog__header">
            <div className="header">
                <h1>Developer  </h1>
                <h6> Lifestyle</h6>
                <p>The daily life of a successful developer</p>
            </div>
               <ul>
                   <li> <Link to="/">Home</Link> </li>
                   <li> <Link to="/blogs">Healthy Lifestyle</Link> </li>
                   <li> <Link to="/blogs">Self Development</Link> </li>
                   <li> <Link to="/blogs">Tutorials </Link> </li>
               </ul>
        </div>
    )
}

export default Header
