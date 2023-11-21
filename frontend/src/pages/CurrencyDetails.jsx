import React, { Children } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

import img1 from "../assets/images/euro.jpg";
import img2 from "../assets/images/bdt.jpg";
import img3 from "../assets/images/d.jpg";
import img4 from "../assets/images/mvr.jpg";
import img5 from "../assets/images/coin.jpg";
import img6 from "../assets/images/crodoba.jpg";
import img7 from "../assets/images/cd.jpg";

import "../styles/currencyDetails.css";

const CurrencyDetails = () => {
  let imgId;

  const { id } = useParams();

  switch (id) {
    case "6526664ae1403a9f3f5d777e":
      imgId = img1;
      break;
    case "652666c6e1403a9f3f5d7780":
      imgId = img2;
      break;
    case "6538abb079b476e1d8e2224c":
      imgId = img3;
      break;
    case "6538abb979b476e1d8e2224e":
      imgId = img4;
      break;
    case "6538abbf79b476e1d8e22250":
      imgId = img5;
      break;
    case "6538abdf79b476e1d8e22253":
      imgId = img6;
      break;
    case "6538abf179b476e1d8e22256":
      imgId = img7;
      break;
  }

  const {
    data: currency,
    loading,
    error,
  } = useFetch(`${BASE_URL}/currencies/getSingleCurrency/${id}`);
  return (
    <>
      <section>
        <Container className="container">
          {loading && <h4 className="text-center pt-5">Loading...</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          <div className="details">
                <img src={imgId} alt="" className="image"/>
                <div className="titleCard">
                    <label className="title">{currency.title}</label>
                    <label className="desc">{currency.desc}</label>
                </div>
          </div>
          <div className="bidBox">
            
          </div>
        </Container>
      </section>
    </>
  );
};

export default CurrencyDetails;
