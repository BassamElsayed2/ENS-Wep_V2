"use client";
import React from "react";
import HeroBanner1 from "../../Components/HeroBanner/HeroBanner1";
import Brand1 from "../../Components/Brand/Brand1";
import About1 from "../../Components/About/About1";
import HowWork from "../../Components/HowWork/HowWork";
import Choose1 from "../../Components/Choose/Choose1";
import Feature1 from "../../Components/Feature/Feature1";
import Counter1 from "../../Components/Counter/Counter1";
import Faq1 from "../../Components/Faq/Faq1";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Feature2 from "../../Components/Feature/Feature2";
import Pricing1 from "../../Components/Pricing/Pricing1";
import Cta1 from "../../Components/Cta/Cta1";
import Blog1 from "../../Components/Blog/Blog1";
import { useLocale, useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <div>
      <HeroBanner1
        subtitle={t.rich("hero.subtitle", {
          span: (chunks) => <span>{chunks}</span>,
        })}
        title={t("hero.title")}
        content={t("hero.content")}
        btnname={t("hero.btn1")}
        btnurl={`/${locale}/contact`}
        btntwo={t("hero.btn2")}
        btn2url={`/${locale}/about`}
        cusimg="/assets/images/intro/introProfileThumb1_1.png"
        cusnumber="240"
        cuscontent={t("hero.customers")}
        rating="4.9/5"
        ratingcon={t("hero.rating")}
        img="/assets/images/intro/introThumb1_1.png"
      ></HeroBanner1>
      <Brand1></Brand1>
      <About1
        img1="/assets/images/about/1.png"
        img2="/assets/images/about/aboutThumb1_2.png"
        subtitle={t("about.subtitle")}
        title={t("about.title")}
        content={t("about.content")}
        FeatureList={[
          t("about.feature1"),
          t("about.feature2"),
          t("about.feature3"),
        ]}
        btnname={t("about.btn")}
        btnurl={`/${locale}/about`}
      ></About1>
      <HowWork></HowWork>
      <Choose1
        subtitle={t("choose.subtitle")}
        title={t("choose.title")}
        content={t("choose.content")}
        FeatureList={[t("choose.feature1"), t("choose.feature2")]}
        FeatureList2={[t("choose.feature3"), t("choose.feature4")]}
        btnname={t("choose.btn")}
        btnurl={`/${locale}/about`}
      ></Choose1>
      <Feature1></Feature1>
      <Counter1></Counter1>
      <Faq1></Faq1>
      <Testimonial></Testimonial>

      <Pricing1></Pricing1>
      <Cta1
        subtitle={t("cta.subtitle")}
        title={t("cta.title")}
        content={t("cta.content")}
        btnurl1={`/${locale}/contact`}
        btnurl2={`/${locale}/contact`}
        img="/assets/images/cta/ctaThumb1_1.png"
      ></Cta1>
      <Blog1></Blog1>
    </div>
  );
};

export default page;
