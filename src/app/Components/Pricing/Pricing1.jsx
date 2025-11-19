"use client";
import { useState, useEffect } from "react";
import PricingCard from "../Card/PricingCard";
import Image from "next/image";
import { useLocale } from "next-intl";
import {
  getAllPricings,
  getAllDesignPricings,
  getAllDevelopmentPricings,
  getAllSupportPricings,
  getAllAppVersionPricings,
} from "@/lib/api/pricings";
import { mapPricingsToComponent } from "@/lib/utils/dataMapper";
import pricingData from "../../Data/pricing1.json";

const Pricing1 = ({ type = "services", pageNumber = null }) => {
  const locale = useLocale();

  const [isActive, setIsActive] = useState("monthly");
  const [pricings, setPricings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPricings = async () => {
      setLoading(true);
      let data = [];

      try {
        switch (type) {
          case "services":
            data = await getAllPricings(pageNumber);
            break;
          case "design":
            data = await getAllDesignPricings(pageNumber);
            break;
          case "development":
            data = await getAllDevelopmentPricings(pageNumber);
            break;
          case "support":
            data = await getAllSupportPricings(pageNumber);
            break;
          case "app-version":
            data = await getAllAppVersionPricings(pageNumber);
            break;
          default:
            data = await getAllPricings(pageNumber);
        }

        // إذا كانت البيانات من API موجودة، استخدمها
        if (data && data.length > 0) {
          const mappedData = mapPricingsToComponent(data, locale);
          setPricings(mappedData);
        } else {
          // استخدام البيانات المحلية بصمت
          const localData = pricingData.map((item) => ({
            id: item.id,
            title:
              typeof item.title === "object" ? item.title[locale] : item.title,
            price: item.price,
            features: item.items.map((feature) =>
              typeof feature === "object" ? feature[locale] : feature
            ),
          }));
          setPricings(localData);
        }
      } catch (error) {
        // استخدام البيانات المحلية عند فشل API
        const localData = pricingData.map((item) => ({
          id: item.id,
          title:
            typeof item.title === "object" ? item.title[locale] : item.title,
          price: item.price,
          features: item.items.map((feature) =>
            typeof feature === "object" ? feature[locale] : feature
          ),
        }));
        setPricings(localData);
      } finally {
        setLoading(false);
      }
    };

    fetchPricings();
  }, [type, pageNumber, locale]);

  // لو مفيش أسعار، متظهرش القسم
  if (loading) {
    return null;
  }

  if (!pricings || pricings.length === 0) {
    return null;
  }

  return (
    <section className="pricing-section section-padding pt-0 fix mt-5">
      <div className="container">
        <div className="section-title text-center mxw-685 mx-auto">
          <div className="subtitle">
            {locale === "ar" ? "الأسعار" : "Our Pricing"}
            <Image
              src="/assets/images/icon/fireIcon.svg"
              alt="img"
              width={16}
              height={17}
            />
          </div>
          <h2 className="title">
            {locale === "ar"
              ? "اختر الخطة المناسبة لك"
              : "Choose The Plans That Suits You!"}
          </h2>
        </div>
        <div className="pricing-wrapper style1">
          <div className="tab-content" id="pills-tabContent">
            <div className="row gy-5">
              {pricings.map((pricing) => (
                <PricingCard
                  key={pricing.id}
                  name={pricing.title}
                  price={pricing.price}
                  monthly={locale === "ar" ? "شهريًا" : "Per Month"}
                  content=""
                  FeatureList={pricing.items || pricing.features || []}
                  btnname={locale === "ar" ? "احصل على الخطة" : "Get This Plan"}
                  btnurl="#contact"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing1;
