import React, {useEffect} from 'react';

import './style.css';
const Modal = () => {

    useEffect(() => {
        const modal = document.querySelector('.modal-container');
        
    },[])
    
    return ( 
        <div className="modal-container">
           <div className="modal-content">
               <h1>MODAL</h1>
           </div>
        </div>
     );
}
 
export default Modal;