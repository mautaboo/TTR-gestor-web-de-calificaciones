import React from 'react';
import {AiFillHome, AiOutlineReconciliation} from 'react-icons/ai';
import {GoThreeBars, GoGraph} from 'react-icons/go';
import {BiSearchAlt, BiEdit} from 'react-icons/bi';
import {SiMicrosoftexcel} from 'react-icons/si';
import descarga from '../images/descarga.png';
import { NavLink } from "react-router-dom";
import '../styles/navbar.css';

function Navbar({visible, show, page}) {
	return (
        <>
            <div className="mobile-nav">
                <button
                    className="mobile-nav-btn"
                    onClick={() => show(!visible)}
                >
                <GoThreeBars size={24}  />
                </button>
            </div>
            <nav className={!visible ? 'navbart' : ''}>
                <button
                    type="button"
                    className="nav-btn"
                    onClick={() => show(!visible)}
                >
                    { <GoThreeBars size={30}/>}
                </button>
                <div>
                    <NavLink
                        className="logo"
                    >
                    <img
                        src={descarga}
                        alt="logo"
                    />
                    </NavLink>
                    <div className="links nav-top">
                        <NavLink className={page==="home" ? "nav-link-selected" : "nav-link" }>
                            <div className='icones'> <AiFillHome/></div> 
                            <span>Inicio</span>
                        </NavLink>
                        <NavLink className={page==="consulta" ? "nav-link-selected" : "nav-link" }>
                            <div className='icones'> <BiSearchAlt/></div> 
                            <span>Consulta </span>
                        </NavLink>
                        <NavLink className={page==="statitics" ? "nav-link-selected" : "nav-link" }>
                            <div className='icones'> <GoGraph/></div> 
                            <span>Estadísiticas</span> 
                        </NavLink>
                        <NavLink className={page==="manual" ? "nav-link-selected" : "nav-link" }>                            <div className='icones'> <BiEdit/></div> 
                        <span>Ingreso manual</span> 
                        </NavLink>
                        <NavLink className={page==="excel" ? "nav-link-selected" : "nav-link" }>                            <div className='icones'> <SiMicrosoftexcel/></div> 
                            <span>Cargar información</span> 
                        </NavLink>
                        <NavLink className={page==="solicitud" ? "nav-link-selected" : "nav-link" }>                            <div className='icones'> <AiOutlineReconciliation/></div> 
                            <span>Solicitudes</span> 
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;