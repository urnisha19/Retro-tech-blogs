import { createStore } from "redux";
import blogReducer from "../Reducer/blogReducer";
export const store = createStore(blogReducer);