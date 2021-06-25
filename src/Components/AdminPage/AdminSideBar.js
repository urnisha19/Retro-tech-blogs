import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSideBar.css';

const AdminSideBar = () => {
    return (
        <div className="sidebar d-flex flex-column">
            <Link to="/admin/addBlog" className="py-1 text-brand">
                <h6 className="d-inline text-brand"><FontAwesomeIcon icon={faPlus} className="mr-2" />Add Blog</h6>
            </Link>
            <Link to="/admin/deleteBlog" className="py-1 text-brand">
                <h6 className="d-inline text-brand"><FontAwesomeIcon className="mr-2" icon={faTrashAlt} style={{ color: 'red' }} />Delete Blog</h6>
            </Link>
        </div>
    );
};

export default AdminSideBar;