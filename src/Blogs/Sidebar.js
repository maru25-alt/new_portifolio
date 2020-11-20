import React from 'react'
import {Avatar} from '@material-ui/core'
import {Link} from 'react-router-dom';
import RecentBlog from './RecentBlog'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import options from '../utils/RichText'

function Sidebar({recentBlogs, categories, aboutData}) {
    return (
        <section id="sideBar">
            <div className="description">
                <Avatar className="profile" src={aboutData.profile?.fields.file.url} alt="profile"/>
                <h3>{aboutData?.name}</h3>
                <h4>{aboutData.description}</h4>
                <p> {documentToReactComponents(aboutData.bio, options)}</p>
            </div>
            <div  className="recentPosts">
                <h3 className="heading">Recent Posts</h3>
                <div>
                    {recentBlogs && recentBlogs.map( blog => {
                        return (
                            <RecentBlog blog={blog} key={blog.id}/>
                        )
                    })}
                    
                </div>
            </div>
            <div className="categories">
                <h3 className="heading">Categories</h3>
                <ul>
                    {categories && categories.map((category, index) => {
                        return (
                            <li className="category__link" key={index}> 
                                <Link to={`/categories/${category}`}> 
                                  {category.charAt(0).toUpperCase() + category.slice(1)} <span>(5)</span>
                                </Link>
                           </li>
                        )
                    })}
                    
                </ul>
            </div>
        </section>
    )
}

export default Sidebar
