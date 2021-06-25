import React from 'react';
import NavBar from '../NavBar/NaBar';
import Blogs from '../Blogs/Blogs';
import './Home.css';

const Home = () => {
    return (
        <div>
          <NavBar/>
          <Blogs/>
        </div>
    );
};

export default Home;