import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

function Featured({featuredBlogs}) {

    return (
        <section id="featured">
            <h2>My Recent Posts</h2>
            <div className="featuredBlogs">
            { featuredBlogs && featuredBlogs.filter(blog => blog.featured === true)
            .slice(0, 3)
            .map(blog => {
                return(
                    <Link key={blog.id} className="featured" to={`/singlePost/${blog.slug}`} style={{backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url(${blog.bannerImage?.fields.file.url})`}}>
                        <h3>{blog.title}</h3>
                        <p>{blog.category}{blog.subcategory && <> - {blog.subcategory}</>}</p>
                        <span><strong>{moment(blog?.date).format("Do MMM YYYY")} </strong></span>
                    </Link>
                )
            })}  
            </div>
        </section>
    )
}

export default Featured
