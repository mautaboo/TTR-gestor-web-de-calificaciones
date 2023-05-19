import React from 'react';
import '../styles/statistics.css';
import Navbar from '../components/navbar';
import Header from '../components/header';
import IMG1 from "../images/descarga2.png";
import IMG2 from "../images/desgarga3.jpg";


const Statistics = ({visible, show, page}) => (
    <>
        <Navbar visible={visible} show={show} page={page} /> 
        <div className='body_index'>
            <div className="main-container">
                <Header page={page} page2={page}/>
                <div className="content">
                    <div className="sta-boxes">
                        <div className='sta-box-t1 box box-m1 shadow-box'>
                            <div className='sta-title-t1'>Solicitudes nuevas</div>
                            <div className='sta-cont-img-t1'>
                                <img
                                    src={IMG1}
                                    alt="estadistica1"
                                    className='sta-img1'
                                />
                            </div>
                        </div>
                        <div className='sta-box-t1 box box-m2 shadow-box'>
                            <div className='sta-title-t1'>Solicitudes no nuevas</div>
                            <div className='sta-cont-img-t1'>
                                <img
                                    src={IMG1}
                                    alt="estadistica1"
                                    className='sta-img1'
                                />
                            </div>
                        </div>
                        <div className='sta-box-t2 box box-g shadow-box'>
                            <div className='sta-cont-img-t2'>
                                <img
                                    src={IMG2}
                                    alt="estadistica1"
                                    className='sta-img2'
                                />
                            </div>
                            <div className='sta-title-t2'>Más Solicitudes</div>
                        </div>
                        <div className='sta-box-t2 box box-g shadow-box'>
                            <div className='sta-title-t2'>Aún Más Solicitudes</div>
                            <div className='sta-cont-img-t2'>
                                <img
                                    src={IMG1}
                                    alt="estadistica1"
                                    className='sta-img2'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Statistics;