import React from "react";
import { Link } from "react-router-dom";

import Slider from "../components/Slider/Slider.js";
import Categories from '../components/Categories/Categories.js';
import Testimonial from '../components/Testimonial/Testimonial.js';
import Featured from '../pages/Main.jsx';

import "./../styles/home.css";

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Testimonial id="cats"/>
    </>
  );
};

export default Home;
