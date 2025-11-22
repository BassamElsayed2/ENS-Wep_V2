"use client";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition, useEffect } from "react";

export default function LanguageSwitcher() {
  const t = useTranslations("languages");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  // إعادة تهيئة الحالة عند تغيير اللغة
  useEffect(() => {
    setIsOpen(false);
  }, [locale]);

  const languages = [
    { code: "ar", name: "العربية", short: "AR" },
    { code: "en", name: "English", short: "EN" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);
  const otherLanguage = languages.find((lang) => lang.code !== locale);

  const handleLanguageChange = (newLocale) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    startTransition(() => {
      const pathWithoutLocale = pathname.replace(`/${locale}`, "");
      const newPath = `/${newLocale}${pathWithoutLocale}`;
      router.push(newPath);
      setIsOpen(false);
    });
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-switcher-button"
        disabled={isPending}
        aria-label={t("switchLanguage")}
      >
        <i className="bi bi-globe2"></i>
        <span className="lang-code">{currentLanguage?.short}</span>
        <i
          className={`bi bi-chevron-${isOpen ? "up" : "down"} chevron-icon`}
        ></i>
      </button>

      {isOpen && (
        <>
          <div className="language-dropdown">
            <div className="language-dropdown-header">
              <i className="bi bi-translate"></i>
              <span>{t("switchLanguage")}</span>
            </div>
            <div className="language-options">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`language-option ${
                    lang.code === locale ? "active" : ""
                  }`}
                  disabled={isPending}
                >
                  <div className="language-option-content">
                    <span className="lang-name">{lang.name}</span>
                    <span className="lang-short">{lang.short}</span>
                  </div>
                  {lang.code === locale && (
                    <i className="bi bi-check-circle-fill"></i>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="language-backdrop" onClick={() => setIsOpen(false)} />
        </>
      )}
    </div>
  );
}
