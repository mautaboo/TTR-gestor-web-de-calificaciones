import React from 'react';
import Home from '../pages/home';
import { useState } from 'react';

const HomeContainer = () =>{
    const [navVisible, showNavbar] = useState(true);
    const page = "home";


    return(
        <Home visible={ navVisible } show={ showNavbar } page = { page }/>
    )
};

export default HomeContainer;