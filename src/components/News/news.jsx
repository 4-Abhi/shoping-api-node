import React from "react";
import style from "./news.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper/core";
import "./news.css";

import { news } from "../../data/news";

// import { news } from "../../data/news";
SwiperCore.use([Autoplay]);

const News = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.heading}>
          <h1>Latest News</h1>
          <p>Don’t miss our latest updated</p>
          <p className={style.underline}></p>
        </div>

        <div className={style.blog}>
          <Swiper
            spaceBetween={30}
            loop={false}
            autoplay={{
              delay: 5500,
            }}
            breakpoints={{
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 1,
              },
            }}
          >
            {news.map((item) => {
              return (
                <SwiperSlide key={item._id}>
                  <div className={style.blog_container}>
                    <div className={style.card}>
                      <img src={item.img} alt="item" />
                    </div>
                    <div className={style.card_body}>
                      <h4>{item.title}</h4>
                      <p>{item.summary}</p>
                      <span className={style.more}>Read more</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default News;
