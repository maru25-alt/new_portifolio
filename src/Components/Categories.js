import React from 'react'
import Sidebar from '../Blogs/Sidebar'
import BlogPost from '../Blogs/BlogPostContainer'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import {withRoomConsumer} from '../Context';

function Categories({context, match}) {
    const {blogs, recentBlogs, categories, aboutData,  social} = context;
    const category = match.params.category
    let categoryBlogs = blogs.filter(blog => blog.category === category)
    return (
        <div className="category__page">
               <ul className="category__navbar">
                   <li> <Link to="/">Home</Link> </li>
                   <li> <Link to="/blogs">Healthy Lifestyle</Link> </li>
                   <li> <Link to="/blogs">Self Development</Link> </li>
                   <li> <Link to="/blogs">Tutorials </Link> </li>
               </ul>
           <h3 className="heading category__title">Category title</h3>
           <div className="category__container">
              <BlogPost blogs={categoryBlogs} />
              <Sidebar recentBlogs={recentBlogs} categories={categories} aboutData={aboutData}/>
           </div>
           <Footer data={social}/>
        </div>
    )
}

export default withRoomConsumer(Categories)
