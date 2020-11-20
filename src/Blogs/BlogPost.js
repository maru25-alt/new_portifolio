import React from 'react'
import {Link} from 'react-router-dom'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import options from '../utils/RichText'
import moment from 'moment'


function BlogPost({blog}) {
    return (
        <div className="blogPost">
            <img src={blog.bannerImage?.fields.file.url} alt={blog.title}></img>
            <div>
                <h3>{blog.title}</h3>
                <span className="date">{moment(blog?.date).format("Do MMM YYYY")}</span>
                <p>   
                    {documentToReactComponents(blog.body.content[0], options)}
                </p>
                <Link to={`/singlePost/${blog.slug}`} className="btn__link">Read More</Link>
            </div>
        </div>
    )
}

export default BlogPost
