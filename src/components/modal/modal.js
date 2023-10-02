import React, {useEffect} from 'react';
import {createPortal} from 'react-dom';
import ModalOverlay from './modal-overlay/modal-overlay';
import styles from './modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal-root");

function Modal({children, modalClose}) {
    useEffect(() => {
        function escapeClose(e) {
            if (e.key === 'Escape') {
                modalClose();
            }
        }
        document.addEventListener('keydown', escapeClose);
        return () => {
            document.removeEventListener('keydown', escapeClose);
        }

    }, [])

    return createPortal((
        <>
            <ModalOverlay modalClose={modalClose}/>
            <div className={styles.modal}>
                <div className={styles.close} onClick={modalClose}>
                    <CloseIcon type="primary"/>
                </div>
                {children}
            </div>
        </>

    ), modalRoot)
}

Modal.propTypes = {
    children: PropTypes.any.isRequired,
    modalClose: PropTypes.func.isRequired
}
export default Modal;