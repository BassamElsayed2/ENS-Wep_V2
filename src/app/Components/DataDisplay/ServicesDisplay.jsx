"use client";

/**
 * ServicesDisplay Component
 * عرض الخدمات من قاعدة البيانات
 * Display services from database
 *
 * Usage:
 * import ServicesDisplay from "@/app/Components/DataDisplay/ServicesDisplay";
 *
 * // Display all services
 * <ServicesDisplay />
 *
 * // Display specific service type
 * <ServicesDisplay type="design" />
 * <ServicesDisplay type="development" />
 * <ServicesDisplay type="support" />
 * <ServicesDisplay type="app-version" />
 *
 * // Display services from specific page
 * <ServicesDisplay pageNumber={1} />
 *
 * // Combine type and page
 * <ServicesDisplay type="design" pageNumber={1} />
 */

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useServices } from "../../../lib/hooks/useServices";

export default function ServicesDisplay({
  type = "services",
  pageNumber = null,
  showTitle = true,
  columns = 3,
  showReadMore = true,
}) {
  const locale = useLocale();
  const t = useTranslations("ServicesDisplay");
  const { data, loading, error } = useServices(type, pageNumber);

  // Get title based on type
  const getTitle = () => {
    const titles = {
      ar: {
        services: "خدماتنا",
        design: "خدمات التصميم",
        development: "خدمات التطوير",
        support: "خدمات الدعم",
        "app-version": "خدمات إصدارات التطبيقات",
      },
      en: {
        services: "Our Services",
        design: "Design Services",
        development: "Development Services",
        support: "Support Services",
        "app-version": "App Version Services",
      },
    };
    return titles[locale][type] || titles[locale]["services"];
  };

  if (loading) {
    return (
      <div
        className="services-display-loading"
        dir={locale === "ar" ? "rtl" : "ltr"}
        style={{
          padding: "2rem",
          textAlign: "center",
          background: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        {t("loading")}
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="services-display-error"
        dir={locale === "ar" ? "rtl" : "ltr"}
        style={{
          padding: "1.5rem",
          background: "#ffebee",
          color: "#c62828",
          borderRadius: "8px",
          border: "1px solid #ef5350",
        }}
      >
        <strong>{t("error")}:</strong> {error}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div
        className="services-display-empty"
        dir={locale === "ar" ? "rtl" : "ltr"}
        style={{
          padding: "2rem",
          textAlign: "center",
          background: "#fff3cd",
          borderRadius: "8px",
          border: "1px solid #ffc107",
        }}
      >
        {t("noServices")}
      </div>
    );
  }

  return (
    <section 
      className="services-display section-padding"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="container">
        {showTitle && (
          <div
            className="section-title text-center"
            style={{ marginBottom: "3rem" }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#333",
                marginBottom: "1rem",
              }}
            >
              {getTitle()}
            </h2>
            <div
              style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                margin: "0 auto",
                borderRadius: "2px",
              }}
            ></div>
          </div>
        )}

        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fill, minmax(${
              Math.floor(100 / columns) - 5
            }%, 1fr))`,
            gap: "2rem",
          }}
        >
          {data.map((service, index) => (
            <div
              key={service.id || index}
              className="service-card"
              style={{
                padding: "2rem",
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                border: "2px solid transparent",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
                e.currentTarget.style.borderColor = "#667eea";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              {service.img && (
                <div
                  className="service-icon"
                  style={{
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "16px",
                    marginBottom: "1.5rem",
                    padding: "1rem",
                  }}
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={60}
                    height={60}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              )}

              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "1rem",
                  minHeight: "60px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  fontSize: "0.95rem",
                  lineHeight: "1.7",
                  marginBottom: "1.5rem",
                  minHeight: "80px",
                }}
              >
                {service.description}
              </p>

              {showReadMore && (
                <Link
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    color: "#667eea",
                    fontWeight: "600",
                    textDecoration: "none",
                    transition: "gap 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = "8px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = "4px";
                  }}
                >
                  {t("readMore")}
                  <span style={{ marginLeft: locale === "ar" ? "0" : "4px", marginRight: locale === "ar" ? "4px" : "0" }}>
                    {locale === "ar" ? "←" : "→"}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
