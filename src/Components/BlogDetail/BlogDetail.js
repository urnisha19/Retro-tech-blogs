import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NaBar';
import { Link } from 'react-router-dom';
import { addBlog } from '../../Components/Redux/Action/blogAction';
import { connect } from 'react-redux';
import './BlogDetail.css';

const BlogsDetail = (props) => {
    const { addBlog, blog } = props;
    const { image, title, content } = props.blog;

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
        <div >
            <NavBar />
            <section className="blog-detail-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-3">
                            <h2 className="mt-5 text-center">Related Blogs</h2>
                            <div className="sidebar d-flex flex-column">
                               { blogs.map(blog => <Link to='/blogs' style={{textDecoration:"none"}}> <h3 className="py-1 related-blog-title" key={blog._id}>{blog.title}</h3></Link>)}
                            </div>
                        </div>
                        <div className="col-md-9 col-9 container p-4">
                            <div className="row text-center">
                                <div className="blog-Detail">

                                    <img className="mb-3" src={`data:image/png;base64,${image.img}`} alt="..." />
                                    <h1 className="mt-3 mb-5 blogTitle" style={{ fontWeight: "bold" }}>{title}</h1>
                                    <div className="mt-3">
                                        <p>{content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogsDetail);