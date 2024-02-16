import React from "react";
import funcCompData from "../../data/funcCompData";
import FAQsTemplate from "../../components/faqsTemplate/FAQsTemplate";

const ClassFAQs = () => {
  return (
    <>
      <div className="mx-16 my-8">
        <FAQsTemplate
          data={funcCompData}
          dataCategory={"Functional Component"}
        ></FAQsTemplate>
      </div>
    </>
  );
};

export default ClassFAQs;
