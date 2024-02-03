import React, { useContext, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../context/Authcontext.js";
import { BASE_URL } from "../utils/config";
import Swal from "sweetalert2";
import ImageCard from "../practiceComponents/ImageCard";

import img1 from "../assets/images/euro.jpg";
import img2 from "../assets/images/bdt.jpg";
import img3 from "../assets/images/d.jpg";
import img4 from "../assets/images/mvr.jpg";
import img5 from "../assets/images/coin.jpg";
import img6 from "../assets/images/crodoba.jpg";
import img7 from "../assets/images/cd.jpg";

import "../styles/main.css";

const Main = () => {
  const navigate = useNavigate();
  const execute = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You need to login first!",
    });
    navigate("/login");
  };
  const { user } = useContext(AuthContext);
  const images = [img1, img2, img3, img4, img5, img6, img7];
  let cnt = 0;

  const {
    data: currencies,
    loading,
    error,
  } = useFetch(`${BASE_URL}/currencies/`);

  return (
    <>
      <section>
             
        <div className="mainHeader">
          <p>Featured Items</p>
        </div>
        {error && <h4 className="text-center pt-5">{error}</h4>}
        {user && (
          <Container className="box">
            <Row>
              {loading && <h4 className="text-center pt-5">Loading...</h4>}

              <div className="cards">
                {currencies?.map((currency) => (
                  <Col lg="3" md="6" sm="6" key={currency._id}>
                    <ImageCard imgSrc={images[cnt++]} children={currency} />
                  </Col>
                ))}
              </div>
            </Row>
          </Container>
        )}
        {!user && execute()};
      </section>
    </>
  );
};

export default Main;
