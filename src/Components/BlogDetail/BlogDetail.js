import React from 'react';
import NavBar from '../NavBar/NaBar';
import { addBlog } from '../../Components/Redux/Action/blogAction';
import { connect } from 'react-redux';

const BlogsDetail = (props) => {
    const {addBlog, blog}=props;
    const {image, title, content}=props.blog;

    return (
        <div>
            <NavBar/>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-9 container p-4">
                            <div className="row text-center">
                                <div className="course-detail" style={{ width: "100%" }}>
                                    <h4 className="mt-3">{title}</h4>
                                    <img className="w-25 mb-3" src={`data:image/png;base64,${image.img}`} alt="..." />
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

export default connect(mapStateToProps, mapDispatchToProps) (BlogsDetail);