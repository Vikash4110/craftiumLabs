/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-boolean-value */
// eslint-disable-next-line react/no-array-index-key
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonial({ data }) {
  return (
    <section className="container mx-auto my-12">
      <Fade direction="up">
        <h1 className="text-5xl text-theme-blue text-center font-bold">
          Testimonials
        </h1>
      </Fade>
      <Fade direction="up" delay={500}>
        <p className="font-light text-lg text-gray-400 text-center mb-8">
          What they said about us.
        </p>
      </Fade>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="mySwiper"
        loop={true}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={3} // Show three slides at a time
        spaceBetween={30} // Space between slides
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col h-full justify-between rounded-2xl   border p-6 mx-2 mb-6">
              <div className="flex items-center mb-4">
                <img
                  src={item.imageUrl}
                  alt="Testimonial"
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex-col pl-5">
                  <h2 className="text-theme-blue text-xl font-semibold">
                    {item.name}
                  </h2>
                  <p className="font-light text-gray-400">{item.company}</p>
                </div>
              </div>
              <p className="font-light text-lg text-gray-600">
                {item.testimoni}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
