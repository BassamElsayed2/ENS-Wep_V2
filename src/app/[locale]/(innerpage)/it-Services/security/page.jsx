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
        Title_en="Cyber Security"
        Title_ar="الأمن السيبراني"
      ></BreadCumb>

      <ServiceDetails namespace="ServiceDetails_Security" />
      <Services1 type="support" pageNumber={3}></Services1>

      {/* <Brand3></Brand3> */}
      <Pricing1 type="support" pageNumber={3} />
    </div>
  );
};

export default page;
