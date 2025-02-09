"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";


const slides = [
  { title: "Анализ текущего состояния карьеры", image: "/analysis.svg", description: "Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития." },
  { title: "Поиск работы", image: "/search.svg", description: "Определим вашу карьерную цель и разработаем стратегию для трудоустройства." },
  { title: "Сопроводительные письма и резюме", image: "/letters.svg", description: "Поможем сформировать профессиональный портфель, который выделит вас среди других кандидатов." },
  { title: "Тренинг по презентации личного бренда", image: "/training.svg", description: "Подсветим сильные стороны и грамотно выстроим самопрезентацию." },
  { title: "Подготовка к собеседованию", image: "/interview.svg", description: "Научим говорить о себе кратко, ярко и профессионально." },
  { title: "Рекомендация по базе STEMPS Career", image: "/recomendation.svg", description: "Поможем встретиться соискателю и работодателю." },
];

export default function Slider() {
  return (
    <div className="w-full px-4 md:px-0 relative">
    <div className="sm:hidden swiper-pagination  !absolute !top-0 !left-0 my-3 flex items-start justify-start"></div>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="py-6"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-100 p-3 mt-10 rounded-xl shadow-md h-48 flex items-start gap-5 sm:flex-col sm:justify-between">
              <Image src={slide.image} width={50} height={50} alt="logo" />
              <h3 className="text-xl md:text-base font-medium text-gray-800 md:w-48">{slide.title}</h3>
              <p className="absolute bottom-0 left-0 w-full p-3 sm:hidden text-gray-600 text-sm">
                {slide.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: linear-gradient(to right, black 50%, #d1d5db 50%);
          width: 35px;
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
}
