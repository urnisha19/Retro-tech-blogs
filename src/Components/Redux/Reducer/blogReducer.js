import { ADD_BLOG } from "../Action/blogAction";

const initialState = {
    blog: {}
}
if (Object.keys(initialState.blog).length > 0) {
    console.log(initialState.blog)
}
const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BLOG:
            // const newBlog ={
            //     title: action.title,  
            //     description: action.content,
            //     image: action.image,
            // }
            // console.log(newBlog)
            // const updatedBlog =[...state.blog,newBlog]
            return { ...state, blog: action.blog };
        default:
            return state;
    }
}
export default blogReducer;