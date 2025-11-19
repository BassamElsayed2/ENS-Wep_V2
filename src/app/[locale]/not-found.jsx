"use client";
import React from "react";
import Header4 from "../Components/Header/Header4";
import Footer from "../Components/Footer/Footer";
import BreadCumb from "../Components/Common/BreadCumb";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const NotFound = () => {
  const t = useTranslations("NotFound");
  const locale = useLocale();

  return (
    <div className="main-page-area">
      <Header4 />
      <BreadCumb
        Title_en={t("title")}
        Title_ar={t("title")}
        bgimg="/assets/images/bg/breadcumgBg.png"
      />
      <section className="not-found-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 text-center">
              <div className="not-found-content">
                <h1 className="display-1 fw-bold text-primary mb-4">404</h1>
                <h2 className="h3 mb-4">{t("heading")}</h2>
                <p className="lead mb-5">{t("description")}</p>
                <div className="not-found-actions">
                  <Link
                    href={`/${locale}`}
                    className="btn btn-primary btn-lg me-3 mb-3"
                  >
                    {t("backHome")}
                  </Link>
                  <Link
                    href={`/${locale}/contact`}
                    className="btn btn-outline-primary btn-lg mb-3"
                  >
                    {t("contactUs")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
