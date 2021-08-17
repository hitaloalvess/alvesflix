import React from 'react';
import { useModal } from '../../providers/modal';

import './style.css';
const Modal = () => {

    const { setModal } = useModal();
    
    const handleMouse = (e, flag) => {
        console.log('Fechando modal');
        setModal({visible:flag, name:''});
    }

    return ( 
        <div className="modal-container" >
           <div className="modal-content" onMouseOut={ (e) => handleMouse(e, false)}>
               <h1>MODAL</h1>
           </div>
        </div>
     );
}
 
export default Modal;