"use client";
/**
 * Services1 Component (API Version)
 * This is an example of how to use the API hooks
 * To use this version, rename it to Services1.jsx
 */

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useServices } from "../../../lib/hooks/useServices";

const Services1 = ({ pageNumber = null }) => {
  const locale = useLocale();
  const { data, loading, error } = useServices("services", pageNumber);

  if (loading) {
    return (
      <section className="service-section section-padding fix">
        <div className="service-container-wrapper style1">
          <div className="container">
            <div className="service-wrapper style1">
              <div className="text-center">Loading services...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="service-section section-padding fix">
        <div className="service-container-wrapper style1">
          <div className="container">
            <div className="service-wrapper style1">
              <div className="text-center text-danger">Error: {error}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="service-section section-padding fix">
      <div className="service-container-wrapper style1">
        <div className="container">
          <div className="service-wrapper style1">
            <div className="row gy-5">
              {data.map((item, index) => (
                <div key={item.id || index} className="col-xl-4 col-md-6">
                  <div
                    className="service-box style3 wow fadeInLeft"
                    data-wow-delay=".3s"
                  >
                    <div className="icon-box style3">
                      <Image
                        src={item.icon || item.img}
                        alt={item.title}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="content">
                      <h3>{item.title}</h3>
                      <p className="text">{item.desc || item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services1;

