import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'


function RecentBlog({blog}) {
    return (
        <Link  to={`/singlePost/${blog.slug}`} className="recentPost">
           <img src={blog.bannerImage?.fields.file.url} alt="post"></img> 
           <div className="recentPost__description">
               <h5>{blog.title}</h5>
               <span>{moment(blog?.date).format("Do MMM YYYY")}</span>
           </div> 
        </Link>
    )
}

export default RecentBlog
