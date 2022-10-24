import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, EffectFade } from "swiper";


export default function Banner() {
  return (
    <>
       <Swiper className="banner-01" effect="fade"
       
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation,  EffectFade]}
    
      >
         
        <SwiperSlide className="swiper-slide" >
          <div className="img-bg" style={{backgroundImage:`url('/img/bg/banner-01.jpg')`}}></div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="img-bg" style={{backgroundImage:`url('/img/bg/banner-02.jpg')`}}></div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="img-bg" style={{backgroundImage:`url('/img/bg/banner-03.jpg')`}}></div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="img-bg" style={{backgroundImage:`url('/img/bg/banner-04.jpg')`}}></div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="img-bg" style={{backgroundImage:`url('/img/bg/banner-01.jpg')`}}></div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}