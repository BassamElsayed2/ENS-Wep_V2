"use client";
import Image from "next/image";
import FeatureCard from "../Card/FeatureCard";
import SectionTitle from "../Common/SectionTitle";
import { useTranslations } from "next-intl";

const Feature1 = () => {
  const t = useTranslations("Feature1");

  const leftFeatures = [
    {
      img: "/assets/images/icon/wcuIcon1_1.svg",
      title: t("features.0.title"),
      content: t("features.0.content"),
    },
    {
      img: "/assets/images/icon/wcuIcon1_2.svg",
      title: t("features.1.title"),
      content: t("features.1.content"),
    },
    {
      img: "/assets/images/icon/wcuIcon1_3.svg",
      title: t("features.2.title"),
      content: t("features.2.content"),
    },
  ];

  const rightFeatures = [
    {
      img: "/assets/images/icon/wcuIcon1_4.svg",
      title: t("features.3.title"),
      content: t("features.3.content"),
    },
    {
      img: "/assets/images/icon/wcuIcon1_5.svg",
      title: t("features.4.title"),
      content: t("features.4.content"),
    },
    {
      img: "/assets/images/icon/wcuIcon1_6.svg",
      title: t("features.5.title"),
      content: t("features.5.content"),
    },
  ];

  return (
    <section className="wcu-section section-padding fix">
      <div className="wcu-container-wrapper style1">
        <div className="container">
          <div
            className="section-title text-center mxw-685 mx-auto wow fadeInUp"
            data-wow-delay=".2s"
          >
            <SectionTitle SubTitle={t("SubTitle")} Title={t("Title")} />
          </div>

          <div className="wcu-wrapper style1">
            <div className="row gy-5 d-flex justify-content-center">
              {/* العمود الأيسر */}
              <div className="col-lg-4 d-flex justify-content-center">
                <div className="wcu-content">
                  {leftFeatures.map((item, index) => (
                    <FeatureCard
                      key={index}
                      img={item.img}
                      title={item.title}
                      content={item.content}
                    />
                  ))}
                </div>
              </div>

              <div className="col-lg-4 d-flex justify-content-center">
                <div className="wcu-thumb wow fadeInUp" data-wow-delay=".2s">
                  <div
                    className="main-thumb wow bounceInUp"
                    data-wow-delay=".6s"
                  >
                    <Image
                      src="/assets/images/wcu/wcuThumb1_1.png"
                      alt="img"
                      width={376}
                      height={342}
                    />
                  </div>
                  <div className="shape">
                    <Image
                      src="/assets/images/shape/wcuThumbShape1_1.png"
                      alt="img"
                      width={376}
                      height={377}
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end">
                <div className="wcu-content">
                  {rightFeatures.map((item, index) => (
                    <FeatureCard
                      key={index}
                      img={item.img}
                      title={item.title}
                      content={item.content}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
