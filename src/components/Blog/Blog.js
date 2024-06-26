import React, { useEffect, useState } from 'react';
import './Blog.css';
import axios from 'axios';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('https://volunteer-network-server-side.vercel.app/blogs')
            .then(res => setBlogs(res.data))
    }, [])
    return (
        <div className='w-75 mx-auto'>
            <div className="container" id='blog-container'>
                {
                    blogs.map(blog => <div className="card mb-3 text-center" key={blog._id}>
                        <img src={blog.image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{blog.name}</h5>
                                <p className="card-text">{blog.description.slice(0,250)}</p>
                                <button className="btn btn-primary">Read More</button>
                            </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;