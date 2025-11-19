"use client";
/**
 * Pricing1 Component (API Version)
 * This is an example of how to use the API hooks for pricing
 * To use this version, rename it to Pricing1.jsx
 */

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePricings } from "../../../lib/hooks/usePricings";

const Pricing1 = ({ pageNumber = null, type = "pricings" }) => {
  const locale = useLocale();
  const t = useTranslations();
  const { data, loading, error } = usePricings(type, pageNumber);

  if (loading) {
    return (
      <section className="pricing-section section-padding fix">
        <div className="container">
          <div className="text-center">Loading pricing...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="pricing-section section-padding fix">
        <div className="container">
          <div className="text-center text-danger">Error: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="pricing-section section-padding fix">
      <div className="container">
        <div className="row gy-4">
          {data.map((item, index) => (
            <div key={item.id || index} className="col-xl-4 col-md-6">
              <div className="pricing-card">
                <div className="pricing-header">
                  <h3 className="pricing-title">{item.title}</h3>
                  <div className="pricing-price">
                    <span className="currency">$</span>
                    <span className="price">{item.price}</span>
                  </div>
                </div>
                <div className="pricing-body">
                  <ul className="pricing-features">
                    {item.items.map((feature, fIndex) => (
                      <li key={fIndex}>
                        <i className="bi bi-check-circle"></i>
                        {typeof feature === "string"
                          ? feature
                          : locale === "ar"
                          ? feature.text_ar
                          : feature.text_en}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link href="#" className="btn btn-primary">
                    {t("getStarted") || "Get Started"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing1;

