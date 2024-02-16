import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const ClassFAQs = ({ data, dataCategory}) => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div>
        <h2 className="mb-10 font-medium dark:text-blue-500 block text-4xl font-semibold text-blue-gray-900">
          {dataCategory} FAQs
        </h2>
      </div>
      {data.map(({ id, question, answer }) => (
        <Accordion
          key={id}
          open={open === id}
          icon={<Icon id={id} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(id)}>
            {question}
          </AccordionHeader>
          <AccordionBody className="text-md font-normal">
            {answer}
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
};

export default ClassFAQs;
