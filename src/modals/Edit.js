import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Modal } from "react-bootstrap";
const EditModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal show={isOpen} onHide={onRequestClose}>
      <div className={`factwise open popup-edit`}>
        <div className="factwise-header">
          <div className="factwise-header-content">
            <img
              src="https://randomuser.me/api/portraits/med/men/93.jpg"
              alt=""
            />
            <input value="Aman" />
          </div>
        </div>
        <div className="factwise-content popup">
          <div className="fw-pd">
            <div className="fw-w">
              <h4>Age</h4>
              <input value="Aman" />
            </div>
            <div className="fw-w">
              <h4>Gender</h4>
              <select>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="fw-w">
              <h4>Country</h4>
              <input value="Aman" />
            </div>
          </div>
          <div className="fw-desc">
            <h4>Description</h4>
            <input value="Aman" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
