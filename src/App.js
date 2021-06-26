import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/HomePage/Home';
import Login from './Components/LoginPage/Login';
import AddBlog from './Components/AdminPage/AddBlog';
import DeleteBlog from './Components/AdminPage/DeleteBlog';
import BlogsDetail from './Components/BlogDetail/BlogDetail';
import { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import PrivateRoute from './Components/LoginPage/PrivateRoute';
export const UserContext = createContext();

function App() {
  let [loggedInUser, setLoggedInUser] = useState({
    isSignedIn : false,
    email: '',
    password: ''
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/blogs">
            <Home />
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* admin  routes */}
          <PrivateRoute path="/admin/addBlog">
          <AddBlog />
          </PrivateRoute>
          <PrivateRoute path="/admin/deleteBlog">
          <DeleteBlog />
          </PrivateRoute>
          {/* <Route path="/admin/deleteBlog">
            <DeleteBlog />
          </Route> */}

          <Route path="/blogDetail">
            <BlogsDetail/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*"></Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
