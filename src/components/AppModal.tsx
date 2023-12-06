import React from 'react';
import Modal from 'react-modal';

const customeStyles = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
};

Modal.setAppElement('#root');

interface ModalProps{
    isOpen: boolean;
    onRequestClose: ()=>void
}

const AppModal: React.FC<ModalProps> = ({isOpen,onRequestClose, children })=>{
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customeStyles}
        >
        {children}
        </Modal>
    )
}
export default AppModal