"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Feature2 = () => {
  const t = useTranslations("FeatureSection2");

  return (
    <section className="feature-section section-padding fix">
      <div className="container">
        <div className="feature-wrapper style1">
          <div className="row gy-5 gx-134">
            {/* المحتوى النصي */}
            <div className="col-xl-6 order-2 order-xl-1">
              <div className="feature-content">
                <div className="section-title">
                  <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                    {t("subtitle")}{" "}
                    <Image
                      src="/assets/images/icon/fireIcon.svg"
                      alt="icon"
                      width={16}
                      height={17}
                    />
                  </div>

                  <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                    {t("title")}
                  </h2>

                  <p
                    className="section-desc wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    {t("description")}
                  </p>
                </div>

                <Link
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".2s"
                  href="/contact"
                >
                  {t("button")}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_91_29)">
                      <path
                        d="M11.6118 3.61182L10.8991 4.32454L14.0706 7.49603H0V8.50398H14.0706L10.8991 11.6754L11.6118 12.3882L16 7.99997L11.6118 3.61182Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_91_29">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>

            {/* البوكسات */}
            <div className="col-xl-6 order-1 order-xl-2">
              <div className="feature-box-wrapper">
                {t.raw("features").map((item, index) => (
                  <div
                    key={index}
                    className={`feature-box style1 child${index + 1} wow fadeInUp`}
                    data-wow-delay={`.${2 + index * 2}s`}
                  >
                    <div className="feature-box-header">
                      <div className="content">
                        <h5>{item.title}</h5>
                        <p className="text">{item.subtitle}</p>
                      </div>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="35"
                          viewBox="0 0 34 35"
                          fill="none"
                        >
                          <circle
                            cx="17"
                            cy="17.5"
                            r="16"
                            stroke="#F1F1F1"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="feature-box-footer">
                      <div className="content">
                        <span className="day">{t("today")}</span>
                        <span className="time">{t("time")}</span>
                      </div>
                      <div className="shape">
                        <Image
                          src="/assets/images/shape/featureProfileShape1_1.png"
                          alt="shape"
                          width={38}
                          height={24}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;