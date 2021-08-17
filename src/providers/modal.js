import React, { useState } from 'react';

export const ModalContext = React.createContext({});

export const ModalProvider = (props) => {
    const [modal, setModal] = useState({
        visible:false,
        name:''
    });

    return (
        <ModalContext.Provider value={{modal, setModal}}>
            {props.children}
        </ModalContext.Provider>
    );
}

export const useModal = () => React.useContext(ModalContext);