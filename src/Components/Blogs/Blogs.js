import React, { useState } from 'react';
import { useEffect } from 'react';
import { addBlog } from '../../Components/Redux/Action/blogAction';
import { connect } from 'react-redux';
import SingleBlog from './SingleBlog';
import './Blogs.css';

const Blogs = (props) => {
    const { addBlog, blog} = props;
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setBlogs(data)
                }
            })
    }, [])

    return (
        <section className="blogs-container my-5 py-5">
            <div className="text-center">
                <h1 className="section-title header-text">Our Blogs</h1>
                <small>We provide new tech items with a retro vibe</small>
            </div>
            <div className="d-flex justify-content-center my-5">
                <div className="row w-75">{
                    blogs.map(blog => <SingleBlog blog={blog} addBlog={addBlog} key={blog._id}></SingleBlog>)
                }
                </div>
            </div>
        </section>
    );
};
const mapStateToProps = state => {
    return {
        blog: state.blog
    }
}
const mapDispatchToProps = {
    addBlog: addBlog
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);