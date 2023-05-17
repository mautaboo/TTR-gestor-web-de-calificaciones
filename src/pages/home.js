import React from 'react';
import '../styles/home.css';
import {FaUserCircle} from 'react-icons/fa';
import {BsGearFill, BsFillBellFill, BsFileEarmarkPersonFill} from 'react-icons/bs';
import {AiFillHome, AiOutlineReconciliation} from 'react-icons/ai';
import {RiFileUploadLine} from 'react-icons/ri';
import Navbar from '../components/navbar';
import IMG1 from "../images/descarga2.png";
import IMG2 from "../images/desgarga3.jpg";


const Home = ({visible, show, page}) => (
    <>
        <Navbar visible={visible} show={show} page={page} /> 
        <div className='body_index'>
            <div className="main-container">
                <div className="header">
                    <div className="route">
                        <div className="route-text-up">
                            <div className="route-icon">
                                <AiFillHome/>
                            </div>
                             / Dashboard
                        </div>
                        <div className="route-text-down">Dashboard </div>
                    </div>
                    <div className="corner-icons">
                        <div className="route-icons">
                            <FaUserCircle/>
                        </div>
                    </div>
                    <div className="corner-icons">
                        <div className="route-icons">
                            <BsGearFill/>
                        </div>
                        <div className="route-icons">
                            <BsFillBellFill/>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="boxes">
                        <div className='box-t1 box box-m1 shadow-box'>
                            <div className='title-t1'>Solicitudes nuevas</div>
                            <div className='icon-t1'>
                            <div className='icones'> <BsFileEarmarkPersonFill/></div> 
                            </div>
                            <div className='content-t1'>
                                <div className='num-t1'>6</div>
                                <div className='num2-t1'>+2</div>
                            </div>
                        </div>
                        <div className='box-t1 box box-m2 shadow-box'>
                            <div className='title-t1'>Nuevos registros</div>
                            <div className='icon-t1'>
                                <div className='icones'> <AiOutlineReconciliation/></div> 
                            </div>
                            <div className='content-t1'>
                                <div className='num-t1'>156</div>
                                <div className='num2-t1'>+2</div>
                            </div>
                        </div>
                        <div className='box-t2 box box-b1 shadow-box'>
                        <div className='title-t2'>Cargar información</div>
                            <div className='icon-t2'>
                                <div className='icones-t2'> <RiFileUploadLine/></div> 
                            </div>
                            <div className='content-t2'>
                                Carga información  de forma masiva desde archivos de excel
                            </div>
                        </div>
                        <div className='box-t3 box box-b2 shadow-box'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales elit id sem pretium dignissim non sodales nibh. Quisque euismod tellus blandit tellus dapibus elementum. Sed fermentum ultricies lorem sit amet egestas. Fusce nec justo finibus, imperdiet nulla nec, iaculis mauris. Mauris vulputate finibus nisl, sed volutpat ipsum sodales mollis.
                        </div>
                        <div className='box-t4 box box-s1 shadow-box'>
                            <img
                                src={IMG1}
                                alt="estadistica1"
                                className='img1'
                            />
                        </div>
                        <div className='box-t5 box box-s2 shadow-box'>
                            <div className='title-t1'>Cursos más solicitados</div>  
                            <img
                                src={IMG2}
                                alt="estadistica2"
                                className='img2'
                            />
                        </div>
                        <div className='box box-g shadow-box'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales elit id sem pretium dignissim non sodales nibh. Quisque euismod tellus blandit tellus dapibus elementum. Sed fermentum ultricies lorem sit amet egestas. Fusce nec justo finibus, imperdiet nulla nec, iaculis mauris. Mauris vulputate finibus nisl, sed volutpat ipsum sodales mollis.</div>
                    </div> 
                </div>
            </div>
        </div>
    </>
);

export default Home;