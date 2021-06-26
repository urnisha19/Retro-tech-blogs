import React from 'react';
import { Link } from 'react-router-dom';

const SingleBlog = (props) => {
    const {addBlog, blog}=props;
    const {image, title,content}=props.blog;

    return (
        <div className="col-md-4 py-md-5 my-md-3 text-center rounded single-Blog">
        <div>
            <img src={`data:image/png;base64,${image.img}`} alt="..." className="single-Blog-img" />
            <h3 className="my-3 header-text single-Blog-title">{title}</h3>
            <p className="text-secondary single-Blog-text">{content}</p>
            <Link to='/blogDetail' >
                <button className="btn text-white ml-4 " onClick={() => addBlog(blog)
                } type="button" id="button-addon2" style={{ backgroundColor: "black" }}>Read More..</button>
            </Link>
        </div>
    </div>
    );
};

export default SingleBlog;