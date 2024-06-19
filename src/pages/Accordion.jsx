import React, { useState } from "react";

const faqData = [
  { question: "How much does it cost to set up a store?", answer: "" },
  { question: "What kind of digital products can I sell?", answer: "" },
  {
    question: "Do I need technical skills to use the platform?",
    answer:
      "No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!",
  },
  {
    question: "Is there a limit to the number of products I can list?",
    answer: "",
  },
  { question: "How do I receive payments for my sales?", answer: "" },
  { question: "Can I sell internationally on this marketplace?", answer: "" },
  {
    question: "What support and resources are available for sellers?",
    answer: "",
  },
  { question: "Is there a review process for uploaded products?", answer: "" },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center mt-0 bg-white ">
      <div className="w-full max-w-2xl mx-auto p-6 bg-white">
        <h1 className="text-2xl font-bold mb-4 text-center">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="text-center mb-8">
          Quick answers to questions you may have. Can’t find what you’re
          looking for?
          <br />
          <a href="#" className="text-blue-500">
            Check out our full documentation
          </a>
        </p>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-2">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left bg-gray-200 py-3 px-4 rounded-md flex justify-between items-center focus:outline-none"
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? "—" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-white border border-t-0 border-gray-200 rounded-b-md">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
