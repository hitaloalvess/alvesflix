import React from 'react';
import { useEffect } from 'react';

import './style.css';

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
                    <h3>MOVIEFLIX</h3>
                </header> 
            );
}
 
export default Header;