import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "./Button";

export const SlideShow = () => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        scrollbar={{ draggable: true }}
        spaceBetween={0}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="mb-5">
          <Button
            custom_width="w-36"
            title="poleras"
            text="poleras"
            size="md"
            color="dark"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Button
            custom_width="w-36"
            title="accesorios"
            text="accesorios"
            size="md"
            color="dark"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Button
            custom_width="w-36"
            title="pantalones"
            text="pantalones"
            size="md"
            color="dark"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Button
            custom_width="w-36"
            title="gorros"
            text="gorros"
            size="md"
            color="dark"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Button
            custom_width="w-36"
            title="chalecos"
            text="chalecos"
            size="md"
            color="dark"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
