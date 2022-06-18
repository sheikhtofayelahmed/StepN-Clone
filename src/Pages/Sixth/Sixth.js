import React from "react";
import "./Sixth.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Sixth = () => {
  return (
    <div className="swipper-container">
<Swiper
 modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <div className="swip">
    <SwiperSlide><div class="wide swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" ><div class="sc-crHmcD eHLWFQ"><iframe src="https://www.youtube.com/embed/xzWUhYQ-xcc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><span>STEPN - Beginners Guide for March 2022</span></div></div></SwiperSlide>
    <SwiperSlide><div class="wide swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1" ><div class="sc-crHmcD eHLWFQ"><iframe src="https://www.youtube.com/embed/TTstOIQru_0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><span>STEPN Best Strategy Breakdown | Common Questions | Sneakers, Gems and Sockets</span></div></div></SwiperSlide>
    <SwiperSlide><div class="wide swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2" ><div class="sc-crHmcD eHLWFQ"><iframe src="https://www.youtube.com/embed/TTstOIQru_0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><span>STEPN Best Strategy Breakdown | Common Questions | Sneakers, Gems and Sockets</span></div></div></SwiperSlide>
    
    <SwiperSlide><div class="wide swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="5" ><div class="sc-crHmcD eHLWFQ"><iframe src="https://www.youtube.com/embed/xkPbEKUJIOY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><span>💰 JE GAGNE 3900€/MOIS EN MARCHANT (WTF!!!) - STEP'N</span></div></div></SwiperSlide>
    <SwiperSlide><div class="wide swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="6" ><div class="sc-crHmcD eHLWFQ"><iframe src="https://www.youtube.com/embed/ZQeNdJziczU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><span>Aylık 9000 TL Kazandıran l Yürüyerek Para Kazan l StepN Mobil Kullanımı</span></div></div></SwiperSlide>
    <SwiperSlide><div class="wide swiper-slide swiper-slide-duplicate" data-swiper-slide-index="7" ><div class="sc-crHmcD eHLWFQ"><iframe src="https://www.youtube.com/embed/6fu5TUHbnEE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><span>Как заработать на ходьбе? Обзор приложения STEPN для новичков!</span></div></div></SwiperSlide>
    <SwiperSlide><div class="wide swiper-slide" data-swiper-slide-index="0" ><div class="sc-crHmcD eHLWFQ"><iframe src="https://www.youtube.com/embed/xzWUhYQ-xcc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><span>STEPN - Beginners Guide for March 2022</span></div></div></SwiperSlide>
    <SwiperSlide><div class="wide swiper-slide" data-swiper-slide-index="1" ><div class="sc-crHmcD eHLWFQ"><iframe src="https://www.youtube.com/embed/TTstOIQru_0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><span>STEPN Best Strategy Breakdown | Common Questions | Sneakers, Gems and Sockets</span></div></div></SwiperSlide>
    <SwiperSlide><div class="wide swiper-slide" data-swiper-slide-index="2" ><div class="sc-crHmcD eHLWFQ"><iframe src="https://www.youtube.com/embed/TTstOIQru_0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><span>STEPN Best Strategy Breakdown | Common Questions | Sneakers, Gems and Sockets</span></div></div></SwiperSlide>
    <SwiperSlide><div class="wide swiper-slide" data-swiper-slide-index="3" ><div class="sc-crHmcD eHLWFQ"><iframe src="https://www.youtube.com/embed/ulEKpGU3Vl0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><span>Гардероб NFT кроссовок StepN - Бегай и зарабатывай!</span></div></div></SwiperSlide>
    <SwiperSlide><div class="wide swiper-slide swiper-slide-prev" data-swiper-slide-index="4" ><div class="sc-crHmcD eHLWFQ"><iframe src="https://www.youtube.com/embed/s3s7A41-0k0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><span>Stepn Explained - Move 2 Earn $30-$1000 Daily | Solana Nft Game 🚀🔥</span></div></div></SwiperSlide>
    <SwiperSlide><div class="wide swiper-slide" data-swiper-slide-index="7" ><div class="sc-crHmcD eHLWFQ"><iframe src="https://www.youtube.com/embed/6fu5TUHbnEE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><span>Как заработать на ходьбе? Обзор приложения STEPN для новичков!</span></div></div></SwiperSlide>
    <SwiperSlide><div class="wide swiper-slide swiper-slide-active" data-swiper-slide-index="5" ><div class="sc-crHmcD eHLWFQ"><iframe src="https://www.youtube.com/embed/xkPbEKUJIOY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><span>💰 JE GAGNE 3900€/MOIS EN MARCHANT (WTF!!!) - STEP'N</span></div></div></SwiperSlide>
    <SwiperSlide><div class="wide swiper-slide swiper-slide-next" data-swiper-slide-index="6" ><div class="sc-crHmcD eHLWFQ"><iframe src="https://www.youtube.com/embed/ZQeNdJziczU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe><span>Aylık 9000 TL Kazandıran l Yürüyerek Para Kazan l StepN Mobil Kullanımı</span></div></div></SwiperSlide>
    </div>
  </Swiper>
    </div>
      
  );
};

export default Sixth;
