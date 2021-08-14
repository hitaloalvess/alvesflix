import React from 'react';
import { useEffect } from 'react';

import './style.css';

import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar.svg';
const Header = () => {

    useEffect( () => {
        const header = document.querySelector('header');
        
        window.addEventListener('scroll', e => {
            if(window.scrollY > 10){
                header.style.backgroundColor= `#111`;
            }else{
                header.style.backgroundColor= `transparent`;
            }
        })
    },[]);

    return ( 
                <header>
                    <div className="logo">
                        <img src={logo} alt="logo alvesflix" />
                    </div>
                    <div className="avatar">
                        <img src={avatar} alt="ícone avatar"/>
                    </div>
                </header> 
            );
}
 
export default Header;