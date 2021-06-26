import React from 'react';
import NavBar from '../NavBar/NaBar';
import Blogs from '../Blogs/Blogs';
import CoverImg from '../../images/cover.png';
import './Home.css';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
          <img src={CoverImg} class="img-fluid" alt="..." ></img>
          <NavBar/>
          <Blogs/>
          <Footer/>
        </div>
    );
};

export default Home;