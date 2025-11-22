"use client";
/**
 * Brand1 Component (API Version)
 * This is an example of how to use the API hooks
 * To use this version, rename it to Brand1.jsx
 */

import Slider from "react-slick";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useBrands } from "../../../lib/hooks/useBrands";

const Brand1 = () => {
  const t = useTranslations("Brand1");
  const locale = useLocale();
  const { data, loading, error } = useBrands();

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div 
        className="brand-slider-section section-padding fix"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className="brand-slider-container-wrapper style1">
          <div className="container">
            <div className="brand-slider-wrapper style1">
              <div className="text-center">{t("loading")}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div 
        className="brand-slider-section section-padding fix"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className="brand-slider-container-wrapper style1">
          <div className="container">
            <div className="brand-slider-wrapper style1">
              <div className="text-center text-danger">{t("error")}: {error}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="brand-slider-section section-padding fix"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="brand-slider-container-wrapper style1">
        <div className="container">
          <div className="brand-slider-wrapper style1">
            <h2
              className="single-section-title wow fadeInUp"
              data-wow-delay=".2s"
            >
              {t("title")}
            </h2>
            <div className="row">
              <div className="slider-area brandSliderOne">
                <div className="swiper gt-slider" id="brandSliderOne">
                  <div className="swiper-wrapper">
                    <Slider {...settings}>
                      {data.map((item, index) => (
                        <div key={item.id || index} className="swiper-slide">
                          <div className="brand-logo">
                            <Image
                              src={item.img}
                              alt={`Brand ${item.id || index + 1}`}
                              width={200}
                              height={60}
                            />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand1;

