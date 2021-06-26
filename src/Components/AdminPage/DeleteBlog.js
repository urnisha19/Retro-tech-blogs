import React from 'react';
import { useEffect, useState } from 'react';
import AdminSideBar from './AdminSideBar';
import NavBar from '../NavBar/NaBar';
import './DeleteBlog.css'
import { useHistory } from 'react-router-dom';

const DeleteBlog = () => {
    const [blogList, setBlogList] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('https://frozen-tor-46195.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogList(data);
            })
    }, [])

    const deleteBlog = (id) => {
        fetch(`https://frozen-tor-46195.herokuapp.com/admin/deleteBlog/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const updateList = blogList.filter(item => item._id !== id);
                    setBlogList(updateList);
                    history.refresh();
                }
            })
    }
    return (
        <div>
            <NavBar></NavBar>
            <section className="add-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-12 py-3"></div>
                        <div className="col-md-9 col-sm-12 col-12 d-flex justify-content-between py-3">
                            <h1 className="header-text text-center">Delete Blog</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-3">
                            <AdminSideBar />
                        </div>
                        <div className="col-md-9 col-9 container p-4">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th style={{ color: '#CB594D', fontSize: "24px" }}>Blogs Title</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        blogList.map(
                                            singleBlog =>
                                                <tr key={singleBlog._id}>
                                                    <td>{singleBlog.title}</td>
                                                    <td>
                                                        <button onClick={() => deleteBlog(singleBlog._id)} className="delete-button rounded">
                                                            Delete Blog</button>
                                                    </td>
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};


export default DeleteBlog;