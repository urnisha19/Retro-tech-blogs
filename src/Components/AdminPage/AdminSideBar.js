import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSideBar.css';

const AdminSideBar = () => {
    return (
        <div className="sidebar d-flex flex-column">
            <h2 className="sidebar-title">Manage Blogs</h2>
            <Link to="/admin/addBlog" className="py-1" style={{textDecoration:"none"}}>
                <h5 className="d-inline admin-manage"><FontAwesomeIcon icon={faPlus} className="mr-2" />Add Blog</h5>
            </Link>
            <Link to="/admin/deleteBlog" className="py-1" style={{textDecoration:"none"}}>
                <h5 className="d-inline admin-manage"><FontAwesomeIcon className="mr-2" icon={faTrashAlt}/>Delete Blog</h5>
            </Link>
        </div>
    );
};

export default AdminSideBar;