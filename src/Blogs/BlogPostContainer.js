import React from 'react'

import BlogPost from './BlogPost'

function BlogPostContainer({ blogs }) {
    return (
        <section>
            {blogs && blogs.map(blog => {
                return (
                    <BlogPost key={blog.slug} blog={blog}></BlogPost>

                )
            })}
        </section>
    )
}

export default BlogPostContainer
