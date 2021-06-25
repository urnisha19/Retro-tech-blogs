import React from 'react';
import { Link } from 'react-router-dom';

const SingleBlog = (props) => {
    const {addBlog, blog}=props;
    const {image, title}=props.blog;

    return (
        <div className="col-md-4 py-md-5 my-md-3 text-center rounded courseDetail">
        <div>
            <img style={{ height: '80px' }} src={`data:image/png;base64,${image.img}`} alt="..." />
            <h4 className="my-3">{title}</h4>
            <Link to='/blogDetail' >
                <button className="btn text-white ml-4 " onClick={() => addBlog(blog)
                } type="button" id="button-addon2" style={{ backgroundColor: "#00AEEF", fontWeight: "bold" }}>Read</button>
            </Link>
        </div>
    </div>
    );
};

export default SingleBlog;