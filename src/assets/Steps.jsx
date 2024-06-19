import React from "react";
import Step1 from "../assets/step1.svg";
import Step2 from "../assets/step2.svg";
import Step3 from "../assets/step3.svg";
import Step4 from "../assets/step4.svg";

const stepsData = [
  {
    number: 1,
    title:
      "Share the holidays, stays and experiences with your friends and family",
    description:
      "You receive trending & curated itineraries and Insider deals on Hotels & Flights to share",
    image: Step1,
  },
  {
    number: 2,
    title:
      "Share the holidays, stays and experiences with your friends and family",
    description:
      "You receive trending & curated itineraries and Insider deals on Hotels & Flights to share",
    image: Step2,
  },
  {
    number: 3,
    title:
      "Share the holidays, stays and experiences with your friends and family",
    description:
      "You receive trending & curated itineraries and Insider deals on Hotels & Flights to share",
    image: Step3,
  },
  {
    number: 4,
    title:
      "Share the holidays, stays and experiences with your friends and family",
    description:
      "You receive trending & curated itineraries and Insider deals on Hotels & Flights to share",
    image: Step4,
  },
];

const Steps = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 py-12">
      <div className="w-full max-w-6xl px-4">
        <div className="flex mb-12">
          <div className="w-1/4 flex flex-col items-start justify-center">
            <h1 className="text-3xl font-bold mb-4">
              GetSetYo handholds you at every step of the way
            </h1>
            <p className="text-lg mb-6">
              You focus on helping your friends and family, we take care of
              everything else.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Get Started
            </button>
          </div>
          <div className="w-3/4 flex flex-col">
            {stepsData.map((step, index) => (
              <div key={index} className="flex items-start mb-10">
                <div className="flex flex-col items-center mr-8">
                  <div className="bg-blue-600 text-white text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full">
                    {step.number}
                  </div>
                  {index < stepsData.length - 1 && (
                    <div className="w-1 bg-gray-300 flex-grow"></div>
                  )}
                </div>
                <div className="flex-1 flex items-center bg-white p-6 rounded-lg shadow-md">
                  <div className="w-full">
                    <h2 className="text-xl font-bold mb-2">{step.title}</h2>
                    <p className="text-gray-700 mb-4">{step.description}</p>
                    <img
                      src={step.image}
                      alt={`Step ${step.number}`}
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
