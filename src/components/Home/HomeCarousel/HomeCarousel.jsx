import { Carousel } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../../../contexts/loading.context";
// import { useAsync } from "../../../hooks/useAsync";
import { getBanners } from "../../../services/banners";
import "./HomeCarousel.scss";
const HomeCarousel = () => {
  const [banners, setBanners] = useState([]);
  const [, setLoadingState] = useContext(LoadingContext);
  const fetchBanners = async () => {
    setLoadingState({ isLoading: true });
    const result = await getBanners();
    setBanners(result.data.content);
    setLoadingState({ isLoading: false });
  };
  useEffect(() => {
    fetchBanners();
  }, []);
  // const { state: banners = [] } = useAsync({ service: getBanners });
  const renderCarouselBS = () => {
    return banners.map((ele, idx) => {
      return (
        <div
          key={ele.maBanner}
          className={`carousel-item banner${idx === 0 ? " active" : ""}`}
        >
          <img className="d-block w-100" src={ele.hinhAnh} alt="First slide" />
        </div>
      );
    });
  };
  return (
    // <Carousel effect="fade">
    //   {banners.map((ele) => (
    //     <div key={ele.maBanner} className="banner">
    //       <img
    //         className="img-fluid"
    //         src={ele.hinhAnh}
    //         alt={`banner_${ele.maPhim}`}
    //       />
    //     </div>
    //   ))}
    // </Carousel>
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">{renderCarouselBS()}</div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default HomeCarousel;
