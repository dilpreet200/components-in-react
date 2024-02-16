import React from "react";
import classCompData from "../../data/classCompData";
import FAQsTemplate from "../../components/faqsTemplate/FAQsTemplate";

const ClassFAQs = () => {
  return (
    <>
      <div className="mx-16 my-8">
        <FAQsTemplate
          data={classCompData}
          dataCategory={"Class Component"}
        ></FAQsTemplate>
      </div>
    </>
  );
};

export default ClassFAQs;
