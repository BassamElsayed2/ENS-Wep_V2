"use client";

/**
 * Data Display Page
 * عرض البيانات من قاعدة البيانات (بدون الأسعار)
 * Display data from database (excluding pricing tables)
 *
 * Visit: http://localhost:3000/en/data-display or http://localhost:3000/ar/data-display
 */

import { useState } from "react";
import { useLocale } from "next-intl";
import { useServices } from "../../../lib/hooks/useServices";
import { useBrands } from "../../../lib/hooks/useBrands";
import Image from "next/image";

export default function DataDisplayPage() {
  const locale = useLocale();
  const [serviceType, setServiceType] = useState("services");
  const [pageNumber, setPageNumber] = useState(null);

  // Fetch data using hooks (excluding pricing data)
  const services = useServices(serviceType, pageNumber);
  const brands = useBrands();

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "1400px",
        margin: "0 auto",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          padding: "2rem",
          borderRadius: "12px",
          marginBottom: "2rem",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "2.5rem" }}>
          {locale === "ar"
            ? "عرض البيانات من قاعدة البيانات"
            : "Database Data Display"}
        </h1>
        <p style={{ margin: "0.5rem 0 0 0", opacity: 0.9 }}>
          {locale === "ar"
            ? "البيانات المعروضة: العلامات التجارية + جميع أنواع الخدمات (بدون الأسعار)"
            : "Displayed Data: Brands + All Service Types (Excluding Pricing)"}
        </p>
        <div
          style={{
            marginTop: "1rem",
            padding: "0.75rem 1rem",
            background: "rgba(255,255,255,0.2)",
            borderRadius: "8px",
            display: "inline-block",
          }}
        >
          <strong>
            {locale === "ar" ? "اللغة الحالية:" : "Current Locale:"}
          </strong>{" "}
          {locale.toUpperCase()}
        </div>
      </header>

      {/* Brands Section */}
      <section
        style={{
          marginBottom: "3rem",
          background: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
            paddingBottom: "1rem",
            borderBottom: "2px solid #667eea",
          }}
        >
          <span style={{ fontSize: "2rem", marginRight: "0.5rem" }}>🏢</span>
          <h2 style={{ margin: 0, fontSize: "1.8rem", color: "#333" }}>
            {locale === "ar" ? "العلامات التجارية" : "Brands"}
          </h2>
        </div>

        {brands.loading && (
          <div
            style={{
              padding: "2rem",
              background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
              borderRadius: "8px",
              textAlign: "center",
              fontSize: "1.1rem",
            }}
          >
            {locale === "ar"
              ? "جاري تحميل العلامات التجارية..."
              : "Loading brands..."}
          </div>
        )}

        {brands.error && (
          <div
            style={{
              padding: "1.5rem",
              background: "#ffebee",
              borderRadius: "8px",
              color: "#c62828",
              border: "1px solid #ef5350",
            }}
          >
            <strong>{locale === "ar" ? "خطأ:" : "Error:"}</strong>{" "}
            {brands.error}
          </div>
        )}

        {!brands.loading && !brands.error && (
          <div>
            <div
              style={{
                padding: "1rem",
                background: "#e8f5e9",
                borderRadius: "8px",
                marginBottom: "1.5rem",
                display: "inline-block",
              }}
            >
              <strong style={{ color: "#2e7d32" }}>
                {locale === "ar" ? "عدد العلامات التجارية:" : "Total Brands:"}
              </strong>{" "}
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1b5e20",
                }}
              >
                {brands.data.length}
              </span>
            </div>

            {brands.data.length === 0 ? (
              <div
                style={{
                  padding: "2rem",
                  background: "#fff3cd",
                  borderRadius: "8px",
                  textAlign: "center",
                  border: "1px solid #ffc107",
                }}
              >
                {locale === "ar"
                  ? "لا توجد علامات تجارية في قاعدة البيانات"
                  : "No brands in the database"}
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: "1.5rem",
                  marginTop: "1rem",
                }}
              >
                {brands.data.map((brand, index) => (
                  <div
                    key={brand.id || index}
                    style={{
                      padding: "1.5rem",
                      border: "2px solid #e0e0e0",
                      borderRadius: "12px",
                      background: "#fff",
                      textAlign: "center",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 16px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "80px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1rem",
                        background: "#f5f5f5",
                        borderRadius: "8px",
                      }}
                    >
                      <Image
                        src={brand.img}
                        alt={`Brand ${brand.id}`}
                        width={150}
                        height={60}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "#666",
                        padding: "0.5rem",
                        background: "#f5f5f5",
                        borderRadius: "6px",
                      }}
                    >
                      <div>
                        <strong>ID:</strong> {brand.id}
                      </div>
                      <div>
                        <strong>
                          {locale === "ar" ? "الترتيب:" : "Order:"}
                        </strong>{" "}
                        {brand.order}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Services Section */}
      <section
        style={{
          marginBottom: "3rem",
          background: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
            paddingBottom: "1rem",
            borderBottom: "2px solid #667eea",
          }}
        >
          <span style={{ fontSize: "2rem", marginRight: "0.5rem" }}>📦</span>
          <h2 style={{ margin: 0, fontSize: "1.8rem", color: "#333" }}>
            {locale === "ar" ? "الخدمات" : "Services"}
          </h2>
        </div>

        {/* Service Type Selector */}
        <div
          style={{
            marginBottom: "2rem",
            padding: "1.5rem",
            background: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          <label
            style={{
              display: "block",
              marginBottom: "1rem",
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#333",
            }}
          >
            {locale === "ar" ? "نوع الخدمة:" : "Service Type:"}
          </label>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              style={{
                padding: "0.75rem 1rem",
                borderRadius: "8px",
                border: "2px solid #667eea",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer",
                background: "white",
                minWidth: "200px",
              }}
            >
              <option value="services">
                {locale === "ar" ? "الخدمات العامة" : "Regular Services"}
              </option>
              <option value="design">
                {locale === "ar" ? "خدمات التصميم" : "Design Services"}
              </option>
              <option value="development">
                {locale === "ar" ? "خدمات التطوير" : "Development Services"}
              </option>
              <option value="support">
                {locale === "ar" ? "خدمات الدعم" : "Support Services"}
              </option>
              <option value="app-version">
                {locale === "ar"
                  ? "خدمات إصدارات التطبيقات"
                  : "App Version Services"}
              </option>
            </select>

            <select
              value={pageNumber || ""}
              onChange={(e) =>
                setPageNumber(e.target.value ? parseInt(e.target.value) : null)
              }
              style={{
                padding: "0.75rem 1rem",
                borderRadius: "8px",
                border: "2px solid #667eea",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer",
                background: "white",
                minWidth: "150px",
              }}
            >
              <option value="">
                {locale === "ar" ? "جميع الصفحات" : "All Pages"}
              </option>
              <option value="1">{locale === "ar" ? "صفحة 1" : "Page 1"}</option>
              <option value="2">{locale === "ar" ? "صفحة 2" : "Page 2"}</option>
              <option value="3">{locale === "ar" ? "صفحة 3" : "Page 3"}</option>
              <option value="4">{locale === "ar" ? "صفحة 4" : "Page 4"}</option>
            </select>
          </div>
        </div>

        {services.loading && (
          <div
            style={{
              padding: "2rem",
              background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
              borderRadius: "8px",
              textAlign: "center",
              fontSize: "1.1rem",
            }}
          >
            {locale === "ar" ? "جاري تحميل الخدمات..." : "Loading services..."}
          </div>
        )}

        {services.error && (
          <div
            style={{
              padding: "1.5rem",
              background: "#ffebee",
              borderRadius: "8px",
              color: "#c62828",
              border: "1px solid #ef5350",
            }}
          >
            <strong>{locale === "ar" ? "خطأ:" : "Error:"}</strong>{" "}
            {services.error}
          </div>
        )}

        {!services.loading && !services.error && (
          <div>
            <div
              style={{
                padding: "1rem",
                background: "#e8f5e9",
                borderRadius: "8px",
                marginBottom: "1.5rem",
                display: "inline-block",
              }}
            >
              <strong style={{ color: "#2e7d32" }}>
                {locale === "ar" ? "عدد الخدمات:" : "Total Services:"}
              </strong>{" "}
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#1b5e20",
                }}
              >
                {services.data.length}
              </span>
            </div>

            {services.data.length === 0 ? (
              <div
                style={{
                  padding: "2rem",
                  background: "#fff3cd",
                  borderRadius: "8px",
                  textAlign: "center",
                  border: "1px solid #ffc107",
                }}
              >
                {locale === "ar"
                  ? "لا توجد خدمات في قاعدة البيانات لهذا النوع/الصفحة"
                  : "No services in the database for this type/page"}
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {services.data.map((service, index) => (
                  <div
                    key={service.id || index}
                    style={{
                      padding: "1.5rem",
                      border: "2px solid #e0e0e0",
                      borderRadius: "12px",
                      background: "#fff",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 16px rgba(0,0,0,0.15)";
                      e.currentTarget.style.borderColor = "#667eea";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.borderColor = "#e0e0e0";
                    }}
                  >
                    {service.img && (
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          marginBottom: "1rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          borderRadius: "12px",
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
                        margin: "0 0 1rem 0",
                        fontSize: "1.3rem",
                        color: "#333",
                        fontWeight: "600",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        margin: "0 0 1rem 0",
                        color: "#666",
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        minHeight: "60px",
                      }}
                    >
                      {service.description}
                    </p>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "#999",
                        padding: "0.75rem",
                        background: "#f5f5f5",
                        borderRadius: "6px",
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                      }}
                    >
                      <div>
                        <strong>ID:</strong> {service.id}
                      </div>
                      <div>
                        <strong>{locale === "ar" ? "الصفحة:" : "Page:"}</strong>{" "}
                        {service.pageNumber}
                      </div>
                      {service.displayOrder !== undefined && (
                        <div>
                          <strong>
                            {locale === "ar" ? "الترتيب:" : "Order:"}
                          </strong>{" "}
                          {service.displayOrder}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* API Status Section */}
      <section
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <span style={{ fontSize: "2rem", marginRight: "0.5rem" }}>🔍</span>
          <h2 style={{ margin: 0, fontSize: "1.8rem", color: "#333" }}>
            {locale === "ar"
              ? "حالة الاتصال بالـ API"
              : "API Connection Status"}
          </h2>
        </div>

        <div
          style={{
            padding: "1.5rem",
            background: "#f8f9fa",
            borderRadius: "8px",
            fontFamily: "monospace",
            fontSize: "0.95rem",
          }}
        >
          <div
            style={{
              marginBottom: "1rem",
              padding: "0.75rem",
              background: "white",
              borderRadius: "6px",
            }}
          >
            <strong>{locale === "ar" ? "رابط الـ API:" : "API URL:"}</strong>{" "}
            <span style={{ color: "#667eea", fontWeight: "bold" }}>
              {process.env.NEXT_PUBLIC_API_URL || "http://localhost:4010"}
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            <div
              style={{
                padding: "1rem",
                background: "white",
                borderRadius: "6px",
                border: `2px solid ${
                  services.loading ? "orange" : services.error ? "red" : "green"
                }`,
              }}
            >
              <strong>
                {locale === "ar" ? "حالة الخدمات:" : "Services Status:"}
              </strong>{" "}
              <div
                style={{
                  marginTop: "0.5rem",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: services.loading
                    ? "orange"
                    : services.error
                    ? "red"
                    : "green",
                }}
              >
                {services.loading
                  ? locale === "ar"
                    ? "جاري التحميل..."
                    : "Loading..."
                  : services.error
                  ? locale === "ar"
                    ? "خطأ"
                    : "Error"
                  : locale === "ar"
                  ? "متصل"
                  : "Connected"}
              </div>
            </div>

            <div
              style={{
                padding: "1rem",
                background: "white",
                borderRadius: "6px",
                border: `2px solid ${
                  brands.loading ? "orange" : brands.error ? "red" : "green"
                }`,
              }}
            >
              <strong>
                {locale === "ar" ? "حالة العلامات التجارية:" : "Brands Status:"}
              </strong>{" "}
              <div
                style={{
                  marginTop: "0.5rem",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: brands.loading
                    ? "orange"
                    : brands.error
                    ? "red"
                    : "green",
                }}
              >
                {brands.loading
                  ? locale === "ar"
                    ? "جاري التحميل..."
                    : "Loading..."
                  : brands.error
                  ? locale === "ar"
                    ? "خطأ"
                    : "Error"
                  : locale === "ar"
                  ? "متصل"
                  : "Connected"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer
        style={{
          marginTop: "3rem",
          padding: "1.5rem",
          background: "#fff3cd",
          borderRadius: "12px",
          border: "2px solid #ffc107",
        }}
      >
        <h3 style={{ marginTop: 0, display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "0.5rem" }}>📖</span>
          {locale === "ar" ? "معلومات" : "Information"}
        </h3>
        <p style={{ margin: "0.5rem 0" }}>
          {locale === "ar"
            ? "هذه الصفحة تعرض البيانات من قاعدة البيانات (باستثناء جداول الأسعار)"
            : "This page displays data from the database (excluding pricing tables)"}
        </p>
        <ul
          style={{
            margin: "1rem 0",
            paddingLeft: locale === "ar" ? "0" : "1.5rem",
          }}
        >
          <li>
            {locale === "ar"
              ? "البيانات المعروضة: العلامات التجارية + جميع أنواع الخدمات"
              : "Data displayed: Brands + All service types"}
          </li>
          <li>
            {locale === "ar"
              ? "البيانات المستبعدة: جميع جداول الأسعار"
              : "Data excluded: All pricing tables"}
          </li>
          <li>
            {locale === "ar"
              ? "للاطلاع على جميع البيانات (بما في ذلك الأسعار): قم بزيارة /test-api"
              : "To see all data (including pricing): Visit /test-api"}
          </li>
        </ul>
      </footer>
    </div>
  );
}

