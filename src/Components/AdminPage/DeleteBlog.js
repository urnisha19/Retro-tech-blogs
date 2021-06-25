import React, { useEffect, useState } from 'react';
import {Table } from 'react-bootstrap';

const DeleteBlog = () => {
    const [blogList, setBlogList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogList(data);
            })
    }, [])

    const deleteBlog = (id) => {
        fetch(`http://localhost:5000/admin/deleteBlog/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const updateList = blogList.filter(item => item._id !== id);
                    setBlogList(updateList);
                }
            })
    }
return(
    <div className="col-md-9">
    <h5 className="my-4 ml-2 font-weight-bold text-left">Manage Blogs</h5>
    <div className="row">
        <Table className="admin-table">
            <thead>
                <tr>
                    <th>Blog</th>
                </tr>
            </thead>
            <tbody>
                {
                    blogList.map(
                        singleBlog =>
                            <tr key={singleBlog._id}>
                                <td>{singleBlog.title}</td>
                                <td>
                                    <button onClick={() => deleteBlog(singleBlog._id)} className="delete-icon rounded">
                                    Delete Blog</button>
                                </td>
                            </tr>
                    )
                }
            </tbody>
        </Table>
    </div>
</div>

)};


export default  DeleteBlog;