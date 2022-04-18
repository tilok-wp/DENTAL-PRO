import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogcontent, setBlogcontent] = useState([])
    useEffect(() => {
        fetch('blog-content.json')
            .then(req => req.json())
            .then(data => setBlogcontent(data))
    }, [])
    return (
        <div className='py-24'>
            < h3 className='text-center text-3xl font-medium decoration-gray-600 uppercase mb-5' > Blogs </h3>
            <div className='blog-container container mx-auto grid md:grid-cols-2 gap-5 px-5 md:px-0'>
                {
                    blogcontent.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div >
        </div>
    );
};

export default Blogs;