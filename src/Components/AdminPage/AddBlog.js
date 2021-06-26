import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import NavBar from '../NavBar/NaBar';
import AdminSideBar from './AdminSideBar';
import './AddBlog.css';

const AddBlog = () => {
    const history = useHistory();
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file)
        formData.append('title', info.title)
        formData.append('content', info.content)
        fetch('http://localhost:5000/admin/addBlog', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                history.replace('/');
                history.go(0);
            });
        e.preventDefault();
        alert('Blog added successfully')
    }

    return (
        <div>
            <NavBar></NavBar>
            <section className="add-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-12 py-3"></div>
                        <div className="col-md-9 col-sm-12 col-12 d-flex justify-content-between py-3">
                            <h1 className="header-text text-center">Add New Blog</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-3">
                            <AdminSideBar />
                        </div>
                        <div className="col-md-9 col-9 container p-4" style={{ backgroundColor: '#4C4646' }}>
                            <form onSubmit={handleSubmit} className="py-5 px-4" style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '10px' }}>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label className="label">Blog Title</label>
                                        <input onBlur={handleBlur} name="title" className="form-control" type="text" placeholder="Enter Blog title" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label className="label">Content</label>
                                        <textarea name="content" onBlur={handleBlur} className="form-control" type="text" placeholder="Enter Blog content" required />
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="label">Image</label><br />
                                    <input onChange={e => setFile(e.target.files[0])} type="file" name="file" required />
                                </div>
                                <div className="form-group d-flex justify-content-start p-3">
                                    <button type="submit" className="btn btn-success" style={{ backgroundColor:"#CB594D", borderColor:"#CB594D"}}>Add Blog</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddBlog;