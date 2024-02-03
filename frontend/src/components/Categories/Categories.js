import React from "react";

import img from '../../assets/images/note.jpg'

import "./categories.css";

const Categories = () => {
  return (
    <div className="cbox">
      <label className="title">Top Categories</label>
      <div className="c1">
        <div className="category">
        <img src={img} alt=""/>   Roman
        </div>
        <div className="category"> <img src={img} alt=""/>Ancient Egypt</div>
        <div className="category"><img src={img} alt=""/>Persian</div>
        <div className="category"><img src={img} alt=""/>Mongolian</div>
        <div className="category"><img src={img} alt=""/>Scandinavian</div>
      </div>
      <div className="c2">
        <div className="category"><img src={img} alt=""/>USD</div>
        <div className="category"><img src={img} alt=""/>Pre Historic</div>
        <div className="category"><img src={img} alt=""/>Mayan</div>
        <div className="category"><img src={img} alt=""/>European</div>
        <div className="category"><img src={img} alt=""/>Others</div>
      </div>
    </div>
  );
};

export default Categories;
