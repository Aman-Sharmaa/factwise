import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Modal } from "react-bootstrap";
const DeleteModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal show={isOpen} onHide={onRequestClose}>
      <Modal.Header>
        <Modal.Title>Are you sure you want to delete?</Modal.Title>
        <AiOutlineClose id="close" onClick={onRequestClose} />
      </Modal.Header>
      <Modal.Body>
        <div className="fw-p">
          <button onClick={onRequestClose} id="cnc">
            Cancle
          </button>
          <button id="dnd">Delete</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
