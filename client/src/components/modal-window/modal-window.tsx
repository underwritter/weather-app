import { IModalWindowProps } from './modal-window.types';
import React, { FC } from 'react';
import './style.sass'

export const ModalWindow:FC<IModalWindowProps> = ({active, onClose, children}) => {
if(!active) {
  return null
};

  return (
    <div className="modal" onClick={onClose}>
      <div 
      className="modal__content" 
      onClick={(e)=>{e.stopPropagation()}}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};
