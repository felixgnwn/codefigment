import React from "react";
import "./NewPostModal.css"

function NewPostModal({ isOpen, isEditing, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content bg-gray-600 rounded-lg flex flex-col">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default NewPostModal;
