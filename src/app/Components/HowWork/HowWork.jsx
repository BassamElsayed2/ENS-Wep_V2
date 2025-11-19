"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useTranslations } from "next-intl";

const HowWork = () => {
  const t = useTranslations("HowWork");
  return (
    <section className="work-process-section section-padding fix">
      <div className="work-process-container-wrapper style1">
        <div className="container">
          <div className="section-title text-center mxw-565 mx-auto">
            <SectionTitle
              SubTitle={t("SubTitle")}
              Title={t("Title")}
            ></SectionTitle>
          </div>
          <div className="work-process-wrapper style1">
            <div className="shape">
              <Image
                src="/assets/images/shape/workProcessShape1_1.png"
                alt="img"
                width={1416}
                height={225}
              />
            </div>
            <div className="row">
              <div className="col-md-4">
                <div
                  className="work-process-box style1 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="step">{t("steps.0.step")}</div>
                  <div className="title">{t("steps.0.title")}</div>
                  <div className="text">{t("steps.0.text")}</div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="work-process-box style1 child2 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="step">{t("steps.1.step")}</div>
                  <div className="title">{t("steps.1.title")}</div>
                  <div className="text">{t("steps.1.text")}</div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="work-process-box style1 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="step">{t("steps.2.step")}</div>
                  <div className="title">{t("steps.2.title")}</div>
                  <div className="text">{t("steps.2.text")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
