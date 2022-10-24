import {Swiper, SwiperSlide} from "swiper/react";
import Link from 'next/link'

import { BiConversation, BiBookReader } from "react-icons/bi"

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
        modules={[Pagination, Navigation, EffectFade]}
      >
        {[
           {bgImage:'/img/bg/banner-01.jpg'},
           {bgImage:'/img/bg/banner-02.jpg'},
           {bgImage:'/img/bg/banner-03.jpg'},
           {bgImage:'/img/bg/banner-04.jpg'}
        ].map((d, i)=>(
          <SwiperSlide className="swiper-slide">
          <div className="wrapper">
            <div className="img-bg" style={{backgroundImage:`url('${d.bgImage}')`}}></div>
            <div className="container">
              <div className="text-wrapper">
                <div className="ss-tags">
                  <div href="#" className="tag">
                    <Link href="#">Technology</Link>
                  </div>
                </div>
                <h1 className="color-white">
                  Innovations that Bring Pleasure to All Peoples
                </h1>
                <p className="color-white mt-4">
                  Lorem ipsum dosectetur adipisicing elit, sed do.Lorem ipsum dolor sit amet, {<br/>}
                  consectetur Nulla fringilla purus at leo dignissim congue. Mauris elementum accumsan.
                </p>
                <div className="card-footer mt-2">
                <div className="profile">
                  <div className="image-container">
                    <img src="/img/avatars/01.jpg" alt="Personal"></img>
                  </div>
                  <div className="text">
                    <p className="xxxs color-white ml-2 fw-600">BY MANOP AEMSIRI</p>
                  </div>
                </div>
                <div className="comment-view">
                  <div className="item mr-2">
                    <BiConversation className="icon"/> 
                    <span className="color-white p xxs fw-600 ml-1">3</span>
                  </div>
                  <div className="item">
                    <BiBookReader/> 
                    <span className="color-white p xxs fw-600 ml-1">127 view</span>
                  </div>
                </div>
              </div>
              </div>
            
            </div>
          </div>
        </SwiperSlide>
        ))}
       
      </Swiper>
    </>
  )
}