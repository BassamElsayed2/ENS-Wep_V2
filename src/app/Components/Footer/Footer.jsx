"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const locale = useLocale();

  return (
    <footer className="footer-section position-relative" dir="rtl">
      <div className="footer-widgets-wrapper style1 fix">
        <div className="shape1">
          <img src="/assets/images/shape/footerShape1_1.png" alt="shape" />
        </div>
        <div className="shape2">
          <img src="/assets/images/shape/footerShape1_2.png" alt="shape" />
        </div>
        <div className="shape3">
          <img src="/assets/images/shape/footerShape1_3.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xl-4 col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-headlogo">
                  <Link href="/">
                    <Image
                      src="/assets/images/logoar.png"
                      alt="img"
                      width={177}
                      height={54}
                    />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>{t("description")}</p>
                  <div className="store-links"></div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-2 col-lg-4 col-md-6 col-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>{locale === "ar" ? "صفحات" : "Pages"}</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href={`/${locale}/service/hosting`}>
                      {locale === "ar" ? "استضافة المواقع" : "Hosting"}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/service/distributor-hosting`}>
                      {locale === "ar"
                        ? "استضافة الموزعين"
                        : "Distributor Hosting"}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/service/private-servers`}>
                      {locale === "ar" ? "السيرفرات الخاصه" : "Private Servers"}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/service/email-services`}>
                      {locale === "ar" ? "البريد الالكتروني" : "Email Services"}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/design-services/wep-design`}>
                      {locale === "ar" ? "تصميم الويب" : "Web Design"}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/design-services/game-design`}>
                      {locale === "ar" ? "تصميم الألعاب" : "Game Design"}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/design-services/app-design`}>
                      {locale === "ar" ? "تصميم التطبيقات" : "App Design"}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/design-services/video-design`}>
                      {locale === "ar" ? "تصميم الفيديوهات" : "Video Design"}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-xl-2 col-lg-4 col-md-6 col-6  wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>{locale === "ar" ? "صفحات مساعدة" : "Help Pages"}</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href={`/${locale}/development/game-development`}>
                      {locale === "ar" ? "برمجة الالعاب" : "Game Development"}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/development/app-development`}>
                      {locale === "ar" ? "برمجة التطبيقات" : "App Development"}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/development/web-development`}>
                      {locale === "ar" ? "برمجة الويب" : "Web Development"}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/it-Services/it-helpDesk`}>
                      {locale === "ar" ? "الدعم الفني" : "IT HelpDesk"}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/it-Services/vpn`}>
                      {locale === "ar" ? "شبكات VPN الآمنة" : "VPN Security"}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/it-Services/call-center`}>
                      {locale === "ar" ? "مراكز الاتصال" : "Call Center"}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${locale}/it-Services/security`}>
                      {locale === "ar" ? "الأمن السيبراني" : "Cyber Security"}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="contact-box">
                  <div className="subtitle">{t("addressTitle")}</div>
                  <div className="widget-head">{t("readyTitle")}</div>
                  <div className="text">{t("readyText")}</div>
                  <div className="info">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                      >
                        <path
                          d="M3.66671 4.16699H18.3334C19.3417 4.16699 20.1667 4.99199..."
                          stroke="#5236FF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="link">
                      <a href="mailto:support@ens.eg">Support@ens.eg</a> <br />
                      <a href="mailto:info@ens.eg">Info@ens.eg</a>{" "}
                    </div>
                  </div>
                  <div className="info">
                    <div className="icon"></div>
                    <div className="link">
                      <a href="tel:+88012365478900">+880 123 654 789 00</a>{" "}
                      <br />
                      <a href="tel:+001652069800">+001 6520 698 00</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom style1">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              {t("copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
