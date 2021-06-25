import React from 'react';
// import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons'
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
// import { Button } from 'bootstrap';
import './DeleteBlog.css';

const DeleteBlog = () => {
    // const history = useHistory();
    // const refreshPage = () => {
    //     window.location.reload(false);
    // }
    // const deleteBlog = (id) => {
    //     fetch(`http://localhost:5000/admin/deleteBlog/${id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             refreshPage(history.push('/'));
    //         });
    //     alert('Blog deleted successfully');
    // };
    return (
        <div id='delete-blog'>
            <div className='manage-blogs'>
                <h3><FontAwesomeIcon style={{ padding: '3px' }} icon={faThLarge} />Delete Blogs</h3>
                {/* {blogs.map((blog) => (
                    <div className='container list'>
                        <div key={blog._id}>
                            <h5>{blog.title}
                                <Button onClick={() => deleteBlog(blog._id)}>
                                    <FontAwesomeIcon style={{ color: 'red' }} icon={faTrashAlt} />
                                </Button>
                            </h5>
                        </div>
                    </div>
                ))} */}
            </div>
        </div>
    );
};

export default DeleteBlog;