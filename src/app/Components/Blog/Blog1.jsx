"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const Blog1 = () => {
    const t = useTranslations("Blog1");
    const locale = useLocale();
    const isRTL = locale === 'ar';
    return (
        
        <section className="blog-section section-padding fix">
            <div className="container">
                <div className="blog-wrapper style1">
                    <div className="section-title text-center mxw-685 mx-auto">
                        <div className="subtitle wow fadeInUp" data-wow-delay=".2s">
                            {t("subtitle")}{" "} <Image src="/assets/images/icon/fireIcon.svg" alt="img" width={16} height={17}   />
                        </div>
                        <h2 className="title wow fadeInUp" data-wow-delay=".4s">{t("title")}</h2>
                    </div>
                    <div className="row gy-5">
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card style1 wow fadeInUp" data-wow-delay=".2s">
                                <div className="thumb">
                                <Image src="/assets/images/blog/blogThumb13.jpg" alt="img" width={326} height={219}   />
                                </div>
                                <div className="body">
                                    <div className="tag-meta">
                                    <Image src="/assets/images/icon/FolderIcon.svg" alt="img" width={16} height={12}   />
                                        {t("workplace")}
                                    </div>
                                    <h3><Link href="/blog/blog-details">{t("services")}</Link></h3>
                                    <div className="blog-meta" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                        <div className="item child1" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                            <span className="icon" style={{ marginLeft: isRTL ? '5px' : '0', marginRight: isRTL ? '0' : '5px' }}>
                                            <Image src="/assets/images/icon/userIcon.svg" alt="img" width={14} height={16}   />
                                            </span>
                                            <span className="text">{t("byAdmin")}</span>
                                        </div>
                                        <div className="item" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                            <span className="icon" style={{ marginLeft: isRTL ? '5px' : '0', marginRight: isRTL ? '0' : '5px' }}>
                                            <Image src="/assets/images/icon/calendar.svg" alt="img" width={15} height={16}   />
                                            </span>
                                            <span className="text">{t("date")}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card style1 wow fadeInUp" data-wow-delay=".4s">
                                <div className="thumb">
                                <Image src="/assets/images/blog/blogThumb12.jpg" alt="img" width={326} height={219}   />
                                </div>
                                <div className="body">
                                    <div className="tag-meta">
                                    <Image src="/assets/images/icon/FolderIcon.svg" alt="img" width={16} height={12}   />
                                        {t("coding")}
                                    </div>
                                    <h3><Link href="/blog/blog-details">{t("checklist")}</Link></h3>
                                    <div className="blog-meta" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                        <div className="item child1" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                            <span className="icon" style={{ marginLeft: isRTL ? '5px' : '0', marginRight: isRTL ? '0' : '5px' }}>
                                            <Image src="/assets/images/icon/userIcon.svg" alt="img" width={14} height={16}   />
                                            </span>
                                            <span className="text">{t("byAdmin")}</span>
                                        </div>
                                        <div className="item" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                            <span className="icon" style={{ marginLeft: isRTL ? '5px' : '0', marginRight: isRTL ? '0' : '5px' }}>
                                            <Image src="/assets/images/icon/calendar.svg" alt="img" width={15} height={16}   />
                                            </span>
                                            <span className="text">{t("date")}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="blog-card style1 wow fadeInUp" data-wow-delay=".6s">
                                <div className="thumb">
                                <Image src="/assets/images/blog/blogThumb11.jpg" alt="img" width={326} height={219}   />
                                </div>
                                <div className="body">
                                    <div className="tag-meta">
                                    <Image src="/assets/images/icon/FolderIcon.svg" alt="img" width={16} height={12}   />
                                        {t("technology")}
                                    </div>
                                    <h3><Link href="/blog/blog-details">{t("help")}</Link></h3>
                                    <div className="blog-meta" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                        <div className="item child1" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                            <span className="icon" style={{ marginLeft: isRTL ? '5px' : '0', marginRight: isRTL ? '0' : '5px' }}>
                                            <Image src="/assets/images/icon/userIcon.svg" alt="img" width={14} height={16}   />
                                            </span>
                                            <span className="text">{t("byAdmin")}</span>
                                        </div>
                                        <div className="item" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                                            <span className="icon" style={{ marginLeft: isRTL ? '5px' : '0', marginRight: isRTL ? '0' : '5px' }}>
                                            <Image src="/assets/images/icon/calendar.svg" alt="img" width={15} height={16}   />
                                            </span>
                                            <span className="text">{t("date")}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog1;