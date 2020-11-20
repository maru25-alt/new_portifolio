import React from 'react'
import Sidebar from '../Blogs/Sidebar';
import Featured from './Featured';
import Footer from './Footer';
import ContactForm from '../Blogs/CommentForm';
import Comments from '../Blogs/Comments';
import SinglePost from '../Blogs/SinglePost'
import {withRoomConsumer} from '../Context';

function SingleBlog({context,match}) {
    const {blogs, recentBlogs, featuredBlogs, categories, aboutData,  social} = context;
    const slug = match.params.slug
    const singleBlog = blogs.find(blog => blog.slug === slug)
    
    return (
        <div id="singlePost">
            <nav>
                <ul id="nav" className="nav singlePost__nav">
                    <li className="current"><a className="smoothscroll" href="/#home">Home</a></li>
                    <li><a className="smoothscroll" href="/#about">About</a></li>
                    <li><a  href="/blogs">Blogs</a></li>
                    <li><a className="smoothscroll" href="/#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="/#portfolio">Works</a></li>
                    <li><a className="smoothscroll" href="/#testimonials">Testimonials</a></li>
                    <li><a className="smoothscroll" href="/#contact">Contact</a></li>
                </ul>
           </nav>
           <div className="row singlePost__container">
               <div className="nine columns">
                   <SinglePost singleBlog={singleBlog}/>
               </div>
               <div className="three columns">
                    <Sidebar recentBlogs={recentBlogs} categories={categories} aboutData={aboutData}/>
               </div>
              
           </div>

           <Featured featuredBlogs={featuredBlogs}/>
           <section>
                <ContactForm  slug={slug}/>
                <Comments slug={slug}/>
           </section>
        <Footer data={social}/> 
        </div>
    )
}

export default withRoomConsumer(SingleBlog)
