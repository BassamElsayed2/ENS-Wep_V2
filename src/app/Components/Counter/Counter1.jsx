"use client";
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { useTranslations } from "next-intl";

const Counter1 = () => {
  const t = useTranslations("Counter1");

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const counters = [
    { number: "560", symbol: "+", text: t("counters.0.text") },
    { number: "32", symbol: "+", text: t("counters.1.text") },
    { number: "100", symbol: "%", text: t("counters.2.text") },
    { number: "99.9", symbol: "٪", text: t("counters.3.text") },
  ];

  return (
    <div className="counter-section fix">
      <div className="counter-container-wrapper style1">
        <div className="container">
          <div
            className="counter-wrapper style1 section-padding"
            data-background="/assets/images/shape/counterShape1_1.png"
          >
            <div className="shape"></div>
            <div className="container">
              <div className="row gy-5">
                {counters.map((item, index) => (
                  <div
                    key={index}
                    className="col-xl-3 col-md-6 d-flex justify-content-center"
                  >
                    <div
                      className="counter-box style1 wow fadeInUp"
                      data-wow-delay={`${0.2 * (index + 1)}s`}
                    >
                      <div className="counter">
                        <span className="counter-number">{item.number}</span>
                        <span className="plus">{item.symbol}</span>
                      </div>
                      <p className="text">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter1;
