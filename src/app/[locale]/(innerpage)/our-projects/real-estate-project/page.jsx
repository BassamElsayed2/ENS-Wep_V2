import Brand3 from "@/app/Components/Brand/Brand3";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import Pricing1 from "@/app/Components/Pricing/Pricing1";
import ServiceDetails from "@/app/Components/ServiceDetails/ServiceDetails";
import Services1 from "@/app/Components/Services/Services1";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title_en="Real Estate Project"
        Title_ar="تطبيق العقارات"
      ></BreadCumb>

      <ServiceDetails namespace="ServiceDetails_RealEstateProject" />
      <Services1 type="app-version" pageNumber={2}></Services1>

      {/* <Brand3></Brand3> */}
      <Pricing1 type="app-version" pageNumber={2} />
    </div>
  );
};

export default page;
