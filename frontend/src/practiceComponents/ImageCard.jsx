import React, {useState} from "react";
import {Link} from 'react-router-dom';
import Modal from '../practiceComponents/Modal.jsx'

import "./imagecard.css";

const ImageCard = ({ children, imgSrc, ...props }) => {
  const [openModal, setOpenModal] = useState(false);
  

  const bringModal = () => {
    setOpenModal(true);
  };
  
  return (
    <>
    <div className="main">
      <img src={imgSrc} alt="" className="img" />
      <div className="div">
        <div className="text">
          <p className="title">{children.title}</p>

          <p className="desc">{children.desc}</p>

          <p className="together">
          <p className="status" >{children.status}</p>
          <Link to={`/currencies/${children._id}`}><i class="ri-add-circle-line"></i></Link>
          </p>

          {/* <p className="tagline">*revised rate (user specific country)</p> */}
        </div>
      </div>
      
    </div>
    
    </>
    
  );
};

export default ImageCard;
