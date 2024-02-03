/*
 *   Title : Testimonial Review Slider
 *   Description :
 *   Author : Joy_2019331037
 *   Date :24/12/2023
 */

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./testimonial.css";

// import required modules
import { Pagination } from "swiper/modules";

import img from "../../assets/images/bitcoin.jpg";
import c1 from "../../assets/images/c1.jpg";
import c2 from "../../assets/images/c2.jpg";
import c3 from "../../assets/images/c3.jpg";
import c4 from "../../assets/images/c4.jpg";
import c5 from "../../assets/images/c5.jpg";
import c6 from "../../assets/images/c6.jpg";
import c7 from "../../assets/images/c7.jpg";
import c8 from "../../assets/images/c8.jpg";
import c9 from "../../assets/images/c9.jpg";

export default function App() {
  return (
    <>
      <div className="testimonial_title">
        <label className="testimonial_title_text">HAPPY USERS</label>
        <div>empty</div>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className="slider">
          <div class="swiper-client-msg">
            <p>
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque, alias ratione tempore sunt exercitationem expedita
              maxime reiciendis quidem. Eum animi quos nemo consequuntur
              doloribus culpa quod veritatis. Sapiente, maiores facilis."
            </p>
          </div>
          <div class="swiper-client-data grid grid-two-column">
            
              <img src={c1} alt="client img" />
          
            <div class="client-data-details">
              <label class="client-name">John Cena</label>
              <label class="client-desig">Entrepreneur</label>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <div class="swiper-client-msg">
            <p>
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque, alias ratione tempore sunt exercitationem expedita
              maxime reiciendis quidem. Eum animi quos nemo consequuntur
              doloribus culpa quod veritatis. Sapiente, maiores facilis."
            </p>
          </div>
          <div class="swiper-client-data">
            
              <img src={c2} alt="client img" />
            
            <div class="client-data-details">
              <label class="client-name">Mary Adamte</label>
              <label class="client-desig">Social Activist</label>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <div class="swiper-client-msg">
            <p>
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque, alias ratione tempore sunt exercitationem expedita
              maxime reiciendis quidem. Eum animi quos nemo consequuntur
              doloribus culpa quod veritatis. Sapiente, maiores facilis."
            </p>
          </div>
          <div class="swiper-client-data grid grid-two-column">
           
              <img src={c3} alt="client img" />
            
            <div class="client-data-details">
              <label class="client-name">Michael Olise</label>
              <label class="client-desig">Blogger</label>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <div class="swiper-client-msg">
            <p>
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque, alias ratione tempore sunt exercitationem expedita
              maxime reiciendis quidem. Eum animi quos nemo consequuntur
              doloribus culpa quod veritatis. Sapiente, maiores facilis."
            </p>
          </div>
          <div class="swiper-client-data grid grid-two-column">
           
              <img src={c4} alt="client img" />
           
            <div class="client-data-details">
              <label class="client-name">Raymond Hay</label>
              <label class="client-desig">Entrepreneur</label>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <div class="swiper-client-msg">
            <p>
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque, alias ratione tempore sunt exercitationem expedita
              maxime reiciendis quidem. Eum animi quos nemo consequuntur
              doloribus culpa quod veritatis. Sapiente, maiores facilis."
            </p>
          </div>
          <div class="swiper-client-data grid grid-two-column">
      
              <img src={c5} alt="client img" />
    
            <div class="client-data-details">
              <label class="client-name">Elissa Edmond</label>
              <label class="client-desig">Youtuber</label>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <div class="swiper-client-msg">
            <p>
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque, alias ratione tempore sunt exercitationem expedita
              maxime reiciendis quidem. Eum animi quos nemo consequuntur
              doloribus culpa quod veritatis. Sapiente, maiores facilis."
            </p>
          </div>
          <div class="swiper-client-data grid grid-two-column">
     
              <img src={c6} alt="client img" />
         
            <div class="client-data-details">
              <label class="client-name">Jordan Aiyu</label>
              <label class="client-desig">Journalist</label>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <div class="swiper-client-msg">
            <p>
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque, alias ratione tempore sunt exercitationem expedita
              maxime reiciendis quidem. Eum animi quos nemo consequuntur
              doloribus culpa quod veritatis. Sapiente, maiores facilis."
            </p>
          </div>
          <div class="swiper-client-data grid grid-two-column">
            
              <img src={c7} alt="client img" />
           
            <div class="client-data-details">
              <label class="client-name">Oishi Dindora</label>
              <label class="client-desig">Model</label>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <div class="swiper-client-msg">
            <p>
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque, alias ratione tempore sunt exercitationem expedita
              maxime reiciendis quidem. Eum animi quos nemo consequuntur
              doloribus culpa quod veritatis. Sapiente, maiores facilis."
            </p>
          </div>
          <div class="swiper-client-data grid grid-two-column">
          
              <img src={c8} alt="client img" />
           
            <div class="client-data-details">
              <label class="client-name">Thomas Muller</label>
              <label class="client-desig">Real Estate Manager </label>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <div class="swiper-client-msg">
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptate assumenda inventore asperiores ab cupiditate doloribus perspiciatis delectus voluptatibus, obcaecati laudantium vitae veniam consequuntur dolorem quidem accusamus ipsa eaque quos!" 
            </p>
          </div>
          <div class="swiper-client-data grid grid-two-column">
          
              <img src={c9} alt="client img" />
         
            <div class="client-data-details">
              <label class="client-name">Lazio Doglus</label>
              <label class="client-desig">Entrepreneur</label>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
