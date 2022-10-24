import { React } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';



export default function Trendingnews(){

  return (
    <Swiper className="banner-02"
    spaceBetween={0}
    slidesPerView={4}
    modules={[Navigation]}
    navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
    breakpoints={{ 640: { width: 992, slidesPerView: 2, }, 
                   768: { width: 768, slidesPerView: 2, }, 
                   575: { width: 640, slidesPerView: 2, },}} 
    >
    <div className="background-wrapper">
      <div className="text">
        <h6 className="color-white">Trending news</h6>
        <div className="swiper-btns">
          <div className="btn swiper-button-prev"></div>
          <div className="btn swiper-button-next"></div>
        </div>
      </div>
    </div>
    <SwiperSlide>
      <div className="ss-card ss-card-02">
        <div className="ss-img vertical-01">
          <div className="img-bg" style={{backgroundImage:`url('/img/content/content-09.jpg')`}}></div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="ss-card ss-card-02">
        <div className="ss-img vertical-01">
          <div className="img-bg" style={{backgroundImage:`url('/img/content/content-10.jpg')`}}></div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="ss-card ss-card-02">
        <div className="ss-img vertical-01">
          <div className="img-bg" style={{backgroundImage:`url('/img/content/content-11.jpg')`}}></div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="ss-card ss-card-02">
        <div className="ss-img vertical-01">
          <div className="img-bg" style={{backgroundImage:`url('/img/content/content-12.jpg')`}}></div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="ss-card ss-card-02">
        <div className="ss-img vertical-01">
          <div className="img-bg" style={{backgroundImage:`url('/img/content/content-13.jpg')`}}></div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="ss-card ss-card-02">
        <div className="ss-img vertical-01">
          <div className="img-bg" style={{backgroundImage:`url('/img/content/content-14.jpg')`}}></div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="ss-card ss-card-02">
        <div className="ss-img vertical-01">
          <div className="img-bg" style={{backgroundImage:`url('/img/content/content-15.jpg')`}}></div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="ss-card ss-card-02">
        <div className="ss-img vertical-01">
          <div className="img-bg" style={{backgroundImage:`url('/img/content/content-09.jpg')`}}></div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
  )
}