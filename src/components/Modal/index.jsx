import React from 'react';
import { useModal } from '../../providers/modal';

import './style.css';
const Modal = () => {

    const {modal, setModal } = useModal();
    
    const handleMouse = (e, flag) => {
        console.log('Fechando modal');
        setModal({...modal,  tamanho:'fechado'});

        setTimeout(() => {
            setModal({...modal, visible:flag,
                                position:{
                                    x:0,
                                    y:0,
                                    width:0,
                                    height:0
                                },
                                content:{}
                            })
        },300);

        
    }

    return ( 
        <div className={`modal-container ${modal.tamanho}`} 
            style={{
            top:modal.position.y,
            left:modal.position.x,
            width:modal.position.width, 
            height:modal.position.height
            }}
            onMouseLeave={ (e) => handleMouse(e, false)}
        >
           <div className="modal-content">
               <h1>{ modal.content.original_name ? modal.content.original_name : modal.content.original_title }</h1>
           </div>
        </div>
     );
}
 
export default Modal;