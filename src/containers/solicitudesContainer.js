import React from 'react';
import Solicitudes from '../pages/solicitudes';
import { useState } from 'react';

const SolicitudesContainer = () =>{
    const [navVisible, showNavbar] = useState(true);
    const page = "Solicitudes";


    return(
        <Solicitudes visible={ navVisible } show={ showNavbar } page = { page }/>
    )
};

export default SolicitudesContainer;