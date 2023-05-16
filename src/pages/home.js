import React from 'react';
import '../styles/home.css';
import Navbar from '../components/navbar';


const Home = ({visible, show, page}) => (
    <>
        <Navbar visible={visible} show={show} page={page} /> 
        <div className='body_index'>
        
            <h1>1 2 3 4 5 6 7 8 9 10 11 12 13</h1> 
        </div>
    </>
);

export default Home;