import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import {
  AiOutlineSearch,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import Data from "../json/celebrities.json";
import DeleteModal from "../modals/Delete";
import EditModal from "../modals/Edit";
import { calculateAge } from "../utils/crud";

const SingleScreen = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterText, setFilterText] = useState("");
  const [openItemId, setOpenItemId] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [editModes, setEditModes] = useState({});
  const [currentData, setCurrentData] = useState(Data, currentPage, filterText);

  const handleShowModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeModalEdit = () => {
    setIsModalOpenEdit(false);
  };

  const handleFwClicked = (itemId) => {
    if (itemId === openItemId) {
      setOpenItemId(null);
    } else {
      setOpenItemId(itemId);
    }
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };
  const toggleEditMode = (itemId) => {
    setEditModes((prevModes) => ({
      ...prevModes,
      [itemId]: !prevModes[itemId],
    }));
  };

  const handleInputChange = (itemId, event) => {
    const updatedData = currentData.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          [event.target.name]: event.target.value,
        };
      }
      return item;
    });
    setCurrentData(updatedData);
  };

  return (
    <div className="factwise-container">
      <h1>Factwise Assessment Visual Reference</h1>
      <div className="fw-s">
        <AiOutlineSearch id="fw-i" />
        <input
          type="text"
          placeholder="Search user"
          value={filterText}
          onChange={handleFilterChange}
        />
      </div>
      {Data.map((item) => (
        <div
          className={`factwise ${openItemId === item.id ? "open" : "closed"}`}
          key={item.id}
          id={item.id}
        >
          <div className="factwise-header">
            <div className="factwise-header-content">
              <img src={item.picture} alt="" />
              <h3>
                {editModes[item.id] ? (
                  <input
                    type="text"
                    name="fullName"
                    value={`${item.first} ${item.last}`}
                    onChange={(e) => handleInputChange(item.id, e)}
                  />
                ) : (
                  `${item.first} ${item.last}`
                )}
              </h3>
            </div>
            <div
              className="factwise-collapse"
              onClick={() => handleFwClicked(item.id)}
            >
              <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
            </div>
          </div>
          <div className="factwise-content">
            <div className="fw-pd">
              <div className="fw-w">
                <h4>Age</h4>
                <p>
                  {editModes[item.id] ? (
                    <input
                      type="text"
                      name="fullName"
                      value={calculateAge(item.dob)}
                      onChange={(e) => handleInputChange(item.id, e)}
                    />
                  ) : (
                    `${calculateAge(item.dob)} Years`
                  )}
                </p>
              </div>
              <div className="fw-w">
                <h4>Gender</h4>

                <p>
                  {editModes[item.id] ? (
                    <select
                      type="text"
                      name="fullName"
                      onChange={(e) => handleInputChange(item.id, e)}
                    >
                      <option value={item.gender}>{item.gender}</option>
                      <option value={item.gender}>Male</option>
                      <option value={item.gender}>Female</option>
                    </select>
                  ) : (
                    `${item.gender}`
                  )}
                </p>
              </div>
              <div className="fw-w">
                <h4>Country</h4>
                <p>
                  {editModes[item.id] ? (
                    <input
                      type="text"
                      name="fullName"
                      value={item.country}
                      onChange={(e) => handleInputChange(item.id, e)}
                    />
                  ) : (
                    `${item.country}`
                  )}
                </p>
              </div>
            </div>
            <div className="fw-desc">
              <h4>Description</h4>
              {editModes[item.id] ? (
                <textarea
                  name="description"
                  value={item.description}
                  onChange={(e) => handleInputChange(item.id, e)}
                />
              ) : (
                <p>{item.description}</p>
              )}
            </div>
            <div className="fw-op">
              {editModes[item.id] ? (
                <div className="edit-icon">
                  <AiOutlineCheckCircle
                    id="update"
                    onClick={() => toggleEditMode(item.id)}
                  />
                  <AiOutlineCloseCircle
                    id="close"
                    onClick={() => toggleEditMode(item.id)}
                  />
                </div>
              ) : (
                <>
                  <RiDeleteBin6Line id="dlt" onClick={handleShowModal} />
                  <FiEdit2 id="edt" onClick={() => toggleEditMode(item.id)} />
                </>
              )}
            </div>
          </div>
        </div>
      ))}

      <DeleteModal isOpen={isModalOpen} onRequestClose={closeModal} />
      <EditModal isOpen={isModalOpenEdit} onRequestClose={closeModalEdit} />
    </div>
  );
};

export default SingleScreen;
