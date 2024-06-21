import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import HeroSection from "./pages/HeroSection";
import HeroSection2 from "./pages/HeroSection2";
import EarningsCalculator from "./pages/EarningCalculator";
import Accordion from "./pages/Accordion";
import Steps from "./pages/Steps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <HeroSection2 />
            <EarningsCalculator />
            <Accordion />
          </>
        ),
        index: true,
      },
      {
        path: "/get-started",
        element: <Steps />,
      },
    ],
  },
]);

export default router;
