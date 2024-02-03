/*
*   Title : Slider Component
*   Description : 
*   Author : Joy_2019331037
*   Date : 25/11/2023
component taken from following link -s
https://github.com/emetdas/Youtube-code/tree/master/web%20components/React-Swiper-Slider-3D-Coverflow
*/
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "../../assets/images/euro.jpg";
import slide_image_2 from "../../assets/images/mvr.jpg";
import slide_image_3 from "../../assets/images/coin.jpg";
import slide_image_4 from "../../assets/images/bdt.jpg";
import slide_image_5 from "../../assets/images/crodoba.jpg";
import slide_image_6 from "../../assets/images/d.jpg";
import slide_image_7 from "../../assets/images/cd.jpg";
import slide_image_8 from "../../assets/images/bitcoin.jpg";

function App() {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <i class="ri-arrow-left-s-line"></i>
          </div>
          <div className="swiper-button-next slider-arrow">
            <i class="ri-arrow-right-s-line"></i>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/swiper.min.css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { EffectCoverFlow, Pagination, Navigation } from "swiper";

// import img1 from "../../assets/images/euro.jpg";
// import img2 from "../../assets/images/mvr.jpg";
// import img3 from "../../assets/images/crodoba.jpg";

// const Slider = () => {
//   return (
//     <div className="container">
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
//         className="slider-container"
//       >
//         <SwiperSlide>
//           <img src={img1} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img2} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={img3} alt="" />
//         </SwiperSlide>

//         <div className="slider-controller">
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;
