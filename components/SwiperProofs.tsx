"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function SwiperProofs() {
  const proofs = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 3, 4, 5, 2, 3, 2];

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={16}
        loop
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        grabCursor
      >
        {proofs.map((num, i) => (
          <SwiperSlide
            key={i}
            className="!w-64 !h-96 rounded-xl overflow-hidden border border-white/10 bg-black"
          >
            <img
              src={`/proofs/proof-${num}.png`}
              alt={`Proof ${num}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
