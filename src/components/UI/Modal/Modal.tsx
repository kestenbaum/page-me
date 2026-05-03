import { FC, ReactNode } from 'react';
import style from './Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={style.overlay} onClick={onClose}>
            <div className={style.modal} onClick={e => e.stopPropagation()}>
                <button className={style.closeBtn} onClick={onClose}>&times;</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;