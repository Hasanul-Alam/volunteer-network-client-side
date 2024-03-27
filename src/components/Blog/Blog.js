import React, { useEffect, useState } from 'react';
import './Blog.css';
import axios from 'axios';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/blogs')
            .then(res => setBlogs(res.data))
    }, [])
    return (
        <div className='w-75 mx-auto'>
            <div className="container" id='blog-container'>
                {
                    blogs.map(blog => <div class="card mb-3">
                        <img src={blog.image} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{blog.name}</h5>
                                <p class="card-text">{blog.description.slice(0,250)}</p>
                                <button className="btn btn-primary">Show Details</button>
                            </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;