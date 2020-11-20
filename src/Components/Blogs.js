import React from 'react'
import Header from '../Blogs/Header'
import Featured from './Featured'
import Grid from '@material-ui/core/Grid';
import BlogPosts from '../Blogs/BlogPostContainer';
import SideBar from '../Blogs/Sidebar';
import Footer from './Footer';
import {withRoomConsumer} from '../Context';

function Blogs({context}) {
    
    const {blogs, recentBlogs, featuredBlogs, categories, aboutData,  social} = context;

    return (
        <div>
            <Header/>
            <Featured featuredBlogs={featuredBlogs}/>
           
              <Grid container spacing={3}>
                  <Grid item  xs={12} md={8} xl={9}>
                      <BlogPosts blogs={blogs}/>
                  </Grid>
                  <Grid item  xs={12} md={4} xl={3}>
                      <SideBar recentBlogs={recentBlogs} categories={categories} aboutData={aboutData}/>
                  </Grid>
              </Grid>
           <Footer data={social}/>
        </div> 
    )
}

export default withRoomConsumer(Blogs)
