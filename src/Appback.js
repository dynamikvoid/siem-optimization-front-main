import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AlertSummary from "./pages/AlertSummary";
import LoggingCost from "./pages/LoggingCost";
import ScatterPlot from "./pages/ScatterPlot";
import CostAnalysis from "./pages/CostAnalysis";
import LandingPage00 from "./pages/LandingPage00";
import LandingPage1 from "./pages/LandingPage1";

import React, { useState, useEffect } from "react";
/*import "./App.css";*/

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/01-alert-summary":
        title = "";
        metaDescription = "";
        break;
      case "/02-logging-cost":
        title = "";
        metaDescription = "";
        break;
      case "/03-scatter-plot":
          title = "";
          metaDescription = "";
        break;  
      case "/06-cost-analysis":
          title = "";
          metaDescription = "";
        break;  
      
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/01-alert-summary" element={<AlertSummary />} />

      <Route path="/02-logging-cost" element={<LoggingCost />} />

      <Route path="/03-scatter-plot" element={<ScatterPlot />} />

      <Route path="/06-cost-analysis" element={<CostAnalysis />} />

      <Route path="/04-landing-page" element={<LandingPage00 />} />

      <Route path="/05-landing-page" element={<LandingPage1 />} />
    </Routes>
  );
}
export default App;
