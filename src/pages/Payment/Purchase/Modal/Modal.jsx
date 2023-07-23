import React, { useState } from "react";
import "./Modal.css"; // Create this CSS file to style the modal

export const Modal = ({ isOpen, onClose, children }) => {
  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times; X
        </button>
        {children}
      </div>
    </div>
  ) : null;
};
