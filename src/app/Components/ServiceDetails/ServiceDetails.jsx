"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ServiceDetails = ({ namespace = "ServiceDetails" }) => {
  const t = useTranslations(namespace);

  return (
    <div className="service-details-section">
      <div className="service-details-container-wrapper section-padding fix">
        <div className="container">
          <div className="service-details-wrapper">
            <div
              className="main-thumb img-custom-anim-right wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <Image
                src="/assets/images/services/servicesDetailsThumb1_1.jpg"
                 alt={t("mainImageAlt", { default: "service main image" })}
                width={1410}
                height={646}
              />
            </div>
            <h2 className="title wow fadeInUp" data-wow-delay=".3s">
            {t("mainTitle")}
            </h2>
            <div className="tagcloud">
              <div className="tag">
              <a href="#">{t("creative")}</a>
               </div>
              <div className="tag">
              <a href="#">{t("branding")}</a>
              </div>
              <div className="tag">
              <a href="#">{t("analytics")}</a>
              </div>
              <div className="tag">
              <a href="#">{t("audience")}</a>
              </div>
            </div>
            <div className="details-box1">
              <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
              {t("overviewTitle")}
              </h3>
              <div className="row gy-3">
                <div className="col-xl-7">
                  <p className="text wow fadeInUp" data-wow-delay=".3s">
                  {t("overviewText1")}
                  </p>
                </div>
                <div className="col-xl-5">
                  <p className="text wow fadeInUp" data-wow-delay=".5s">
                  {t("overviewText2")}
                  </p>
                </div>
              </div>
            </div>
            <div className="details-box2">
              <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s">
              {t("benefitsTitle")}
              </h3>
              <div className="row gy-3">
                <div className="col-xl-6">
                  <div
                    className="feature-wrapper wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <ul className="feature">
                    <li>{t("benefit1")}</li>
                      <li>{t("benefit2")}</li>
                      <li>{t("benefit3")}</li>
                    </ul>
                    <ul className="feature">
                    <li>{t("benefit4")}</li>
                      <li>{t("benefit5")}</li>
                      <li>{t("benefit6")}</li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="progress-wrap">
                    <div className="progress-meta">
                      <div className="title">{t("brandingDesign")}</div>
                      <div className="percentage">95%</div>
                    </div>
                    <div className="progress-container">
                    <div className="progress-bar" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="progress-wrap mb-0">
                    <div className="progress-meta">
                      <div className="title">{t("business")}</div>
                      <div className="percentage">85%</div>
                    </div>
                    <div className="progress-container">
                      <div className="progress-bar" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="thumb-wrapper">
                <div className="row gy-3">
                  <div className="col-xl-6">
                    <div
                      className="thumb img-custom-anim-left wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <Image
                        src="/assets/images/services/servicesDetailsThumb1_2.jpg"
                        alt={t("thumbAlt1", { default: "service image 1" })}
                        width={690}
                        height={328}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div
                      className="thumb  img-custom-anim-left wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <Image
                        src="/assets/images/services/servicesDetailsThumb1_3.jpg"
                        alt={t("thumbAlt2", { default: "service image 2" })}
                        width={690}
                        height={328}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text1 wow fadeInUp" data-wow-delay=".3s">
              {t("text1")}
              </p>
              <p className="text2 wow fadeInUp" data-wow-delay=".5s">
              {t("text2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
