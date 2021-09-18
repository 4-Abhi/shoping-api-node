import React from "react";
import style from "./banner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className={style.banner}>
      <Swiper
        loop={false}
        autoplay={{
          delay: 6500,
        }}
        className={style.swiper}
      >
        <SwiperSlide>
          <div className="row">
            <div className="col-sm-12  col-md-6 col-lg-6">
              <div className={style.item}>
                <div className={style.item_info}>
                  <h1>
                    Tasty & Healthy <br />
                    Organic Food
                  </h1>
                  <div className={style.item_btn}>EXPLORE PRODUCT</div>
                </div>
              </div>
            </div>

            <div className="col-sm-12  col-md-6 col-lg-6">
              <div className={style.item_logo}>
                <img src="images/banner/b1.png" alt="banner" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.row}>
            <div className="col-sm-12  col-md-6 col-lg-6">
              <div className={style.item_logo}>
                <img src="images/banner/b4.png" alt="banner" />
              </div>
            </div>
            <div className="col-sm-12  col-md-6 col-lg-6">
              <div className={style.item}>
                <div className={style.slider_item_info}>
                  <h1>
                    Our Garden's Most <br />
                    Favorite Food
                  </h1>
                  <p className={style.summary}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br />
                    Voluptatem ex sint harum incidunt expedita officia.
                  </p>
                  <div className={style.slider_btn}>
                    <div className={style.slider_item_btn}>EXPLORE PRODUCT</div>
                    <div className={style.slider_learn_btn}>LEARN MORE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
