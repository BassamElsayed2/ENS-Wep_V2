import BreadCumb from "@/app/Components/Common/BreadCumb";
import ContactInfo from "@/app/Components/ContactInfo/ContactInfo";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title_en="Contact Us"
        Title_ar="تواصل معنا"
      ></BreadCumb>
      <ContactInfo></ContactInfo>
    </div>
  );
};

export default page;
