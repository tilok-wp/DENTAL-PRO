import React from 'react';

const Blog = (props) => {
    const { title, description } = props.blog
    return (
        <div className='p-5 bg-slate-100 rounded-lg border-t-4 border-cyan-300'>
            <h3 className='text-3xl mb-3'>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Blog;