import React from 'react';
import Statistics from '../pages/statistics';
import { useState } from 'react';

const StatisticsContainer = () =>{
    const [navVisible, showNavbar] = useState(true);
    const page = "Estadisticas";


    return(
        <Statistics visible={ navVisible } show={ showNavbar } page = { page }/>
    )
};

export default StatisticsContainer;