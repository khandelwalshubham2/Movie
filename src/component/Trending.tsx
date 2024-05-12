import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Card } from "../component";
import { MovieDataType } from "../modals";

type TrendingProps = {
  trendingMovies: MovieDataType[];
};

const Trending = ({ trendingMovies }: TrendingProps) => {
  return (
    <>
      <div className="slider-container mt-10">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={15}
          slidesPerView="auto"
          // navigation={true}
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {trendingMovies.map((trendingMovie) => (
            <SwiperSlide key={trendingMovie.id}>
              <Card detailsOnTop={true} movie={trendingMovie}></Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Trending;
