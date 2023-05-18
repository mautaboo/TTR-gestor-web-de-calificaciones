import React from 'react';
import Profile from '../pages/profile';
import { useState } from 'react';

const ProfileContainer = () =>{
    const [navVisible, showNavbar] = useState(true);
    const page = "home";


    return(
        <Profile visible={ navVisible } show={ showNavbar } page = { page }/>
    )
};

export default ProfileContainer;