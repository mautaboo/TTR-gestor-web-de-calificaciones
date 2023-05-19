import React from 'react';
import Profile from '../pages/profile';
import { useState } from 'react';

const ProfileContainer = () =>{
    const [navVisible, showNavbar] = useState(true);
    const page2 = "Perfil";
    const page = "Dashboard";


    return(
        <Profile visible={ navVisible } show={ showNavbar } page = { page } page2 = { page2 } />
    )
};

export default ProfileContainer;