import React from 'react'
import {Link} from 'react-router-dom'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import options from '../utils/RichText'
import moment from 'moment'

function SinglePost({singleBlog}) {
    return (
        <section className="singlePost">
           <div className="singlePost__heading">
               <h1>{singleBlog?.title}</h1>
               <Link to={`/categories/${singleBlog?.category}`}>{singleBlog?.category} {singleBlog?.subcategory && <> - {singleBlog?.subcategory} </>}</Link>
               <h6>{moment(singleBlog?.date).format("Do MMM YYYY")}</h6>
               <div className="share ">
                   <button className=" m-2"> Facebook</button>
                   <button className=" m-2">Instagram</button>
                   <button className=" m-2">Linkedin</button>
               </div>
               <img width="500" src={singleBlog?.bannerImage?.fields.file.url} alt="post title"></img>
               <div>{documentToReactComponents(singleBlog?.body, options)}</div>
           </div>
        </section>
    )
}

export default SinglePost
