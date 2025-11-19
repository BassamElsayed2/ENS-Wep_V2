import Link from "next/link";
import DropDown from "./DropDown";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Nav({ setMobileToggle }) {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href={`/${locale}`}>{t("navigation.home")}</Link>
      </li>

      <li className="menu-item-has-children">
        <Link
          href={`/${locale}/service/hosting`}
          onClick={() => setMobileToggle(false)}
        >
          {locale === "ar" ? "خدمات الويب" : "Web Services"}
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                href={`/${locale}/service/hosting`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? " استضافة المواقع" : "Hosting"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/service/distributor-hosting`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? "استضافة الموزعين" : "Distributor Hosting"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/service/private-servers`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? " السيرفرات الخاصه" : "Private Servers"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/service/email-services`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? " البريد الالكتروني" : "Email Services"}
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link
          href={`/${locale}/design-services/wep-design`}
          onClick={() => setMobileToggle(false)}
        >
          {locale === "ar" ? "خدمات التصميم" : "Design Services"}
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                href={`/${locale}/design-services/wep-design`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? "تصميم الويب" : "Wep Design"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/design-services/game-design`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? "تصميم الألعاب" : "Game Design"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/design-services/app-design`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? "تصميم التطبيقات" : "App Design"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/design-services/video-design`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? "تصميم الفيديوهات" : "Video Design"}
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link
          href={`/${locale}/it-Services/it-helpDesk`}
          onClick={() => setMobileToggle(false)}
        >
          {locale === "ar" ? "خدمات الدعم الفني" : "IT HelpDesk Services"}
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                href={`/${locale}/it-Services/it-helpDesk`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? "الدعم الفني" : "IT HelpDesk"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/it-Services/vpn`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? "شبكات VPN الآمنة" : "VPN Security"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/it-Services/call-center`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? "مراكز الاتصال" : "Call Center"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/it-Services/security`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? "الأمن السيبراني" : "Cyber Security"}
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link
          href={`/${locale}/development`}
          onClick={() => setMobileToggle(false)}
        >
          {locale === "ar" ? "البرمجة والتطوير" : "Development "}
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                href={`/${locale}/development/game-development`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? "برمجة الالعاب" : "Game Development"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/development/app-development`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? "برمجة التطبيقات" : "App Development"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/development/web-development`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? "برمجة الويب" : "Web Development"}
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link
          href={`/${locale}/our-projects/news-app`}
          onClick={() => setMobileToggle(false)}
        >
          {locale === "ar" ? "الاصدارات البرمجيه" : "Our Projects"}
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link
                href={`/${locale}/our-projects/news-project`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? "تطبيق الاخبار" : "News App"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/our-projects/real-estate-project`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? "تطبيق العقارات" : "Real Estate App"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/our-projects/store-project`}
                onClick={() => setMobileToggle(false)}
              >
                {locale === "ar" ? "تطبيق المتجر" : "Store App"}
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li>
        <Link
          href={`/${locale}/contact`}
          onClick={() => setMobileToggle(false)}
        >
          {t("navigation.contact")}
        </Link>
      </li>

      <li>
        <LanguageSwitcher />
      </li>
    </ul>
  );
}
