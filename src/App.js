import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage7 from "./pages/LandingPage7";
import PricingStructure from "./pages/PricingStructure";
import ImpactCost from "./pages/ImpactCost";
import GroupComponent from "./pages/GroupComponent";
import CostAnalysis from "./pages/CostAnalysis";
import PaymentSel from "./pages/PaymentSel";
import PaymentSel1 from "./pages/PaymentSel1";
import PaymentSel2 from "./pages/PaymentSel2";
import Exploration from "./pages/Exploration";
import LandingPage from "./pages/LandingPage";
import LandingPage1 from "./pages/LandingPage1";
import LandingPage2 from "./pages/LandingPage2";
import LandingPage3 from "./pages/LandingPage3";
import LandingPage4 from "./pages/LandingPage4";
import LandingPage5 from "./pages/LandingPage5";
import LandingPage6 from "./pages/LandingPage6";
import ExportToCodeErrorsDelete from "./pages/ExportToCodeErrorsDelete";
import FrameComponent from "./pages/FrameComponent";
import IngestionVolTT from "./pages/IngestionVolTT";
import IngestionVolTT1 from "./pages/IngestionVolTT1";
import IngestionVolTT2 from "./pages/IngestionVolTT2";
import AlertSumTT from "./pages/AlertSumTT";
import GroupComponent1 from "./pages/GroupComponent1";
import GroupComponent2 from "./pages/GroupComponent2";
import GroupComponent3 from "./pages/GroupComponent3";
import GroupComponent4 from "./pages/GroupComponent4";
import GroupComponent5 from "./pages/GroupComponent5";
import GroupComponent6 from "./pages/GroupComponent6";
import GroupComponent7 from "./pages/GroupComponent7";
import GroupComponent8 from "./pages/GroupComponent8";
import LoggingCost from "./pages/LoggingCost";
import GroupComponent9 from "./pages/GroupComponent9";
import GroupComponent10 from "./pages/GroupComponent10";
import GroupComponent11 from "./pages/GroupComponent11";
import GroupComponent12 from "./pages/GroupComponent12";
import AlertSummary from "./pages/AlertSummary";
import { useEffect } from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
  const client = new QueryClient();
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
      case "/07-pricing-structure":
        title = "";
        metaDescription = "";
        break;
      case "/06-impact-cost":
        title = "";
        metaDescription = "";
        break;
      case "/group-6":
        title = "";
        metaDescription = "";
        break;
      case "/03-cost-analysis":
        title = "";
        metaDescription = "";
        break;
      case "/05-payment-sel2":
        title = "";
        metaDescription = "";
        break;
      case "/05-payment-sel1":
        title = "";
        metaDescription = "";
        break;
      case "/05-payment-sel":
        title = "";
        metaDescription = "";
        break;
      case "/04-exploration":
        title = "";
        metaDescription = "";
        break;
      case "/00-landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/00-landing-page1":
        title = "";
        metaDescription = "";
        break;
      case "/00-landing-page2":
        title = "";
        metaDescription = "";
        break;
      case "/00-landing-page3":
        title = "";
        metaDescription = "";
        break;
      case "/00-landing-page4":
        title = "";
        metaDescription = "";
        break;
      case "/00-landing-page5":
        title = "";
        metaDescription = "";
        break;
      case "/00-landing-page6":
        title = "";
        metaDescription = "";
        break;
      case "/export-to-code-errors-delete-me-anytime":
        title = "";
        metaDescription = "";
        break;
      case "/frame-12":
        title = "";
        metaDescription = "";
        break;
      case "/ingestion-vol-tt":
        title = "";
        metaDescription = "";
        break;
      case "/ingestion-vol-tt1":
        title = "";
        metaDescription = "";
        break;
      case "/ingestion-vol-tt2":
        title = "";
        metaDescription = "";
        break;
      case "/alert-sum-tt":
        title = "";
        metaDescription = "";
        break;
      case "/group-20":
        title = "";
        metaDescription = "";
        break;
      case "/group-19":
        title = "";
        metaDescription = "";
        break;
      case "/group-12":
        title = "";
        metaDescription = "";
        break;
      case "/group-18":
        title = "";
        metaDescription = "";
        break;
      case "/group-14":
        title = "";
        metaDescription = "";
        break;
      case "/group-17":
        title = "";
        metaDescription = "";
        break;
      case "/group-13":
        title = "";
        metaDescription = "";
        break;
      case "/group-11":
        title = "";
        metaDescription = "";
        break;
      case "/02-logging-cost":
        title = "";
        metaDescription = "";
        break;
      case "/group-15":
        title = "";
        metaDescription = "";
        break;
      case "/group-16":
        title = "";
        metaDescription = "";
        break;
      case "/group-33":
        title = "";
        metaDescription = "";
        break;
      case "/group-32":
        title = "";
        metaDescription = "";
        break;
      case "/01-alert-summary":
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
    <QueryClientProvider client={client}>
    <Routes>
      <Route path="/" element={<LandingPage7 />} />

      <Route path="/07-pricing-structure" element={<PricingStructure />} />

      <Route path="/06-impact-cost" element={<ImpactCost />} />

      <Route path="/group-6" element={<GroupComponent />} />

      <Route path="/03-cost-analysis" element={<CostAnalysis />} />

      <Route path="/05-payment-sel2" element={<PaymentSel />} />

      <Route path="/05-payment-sel1" element={<PaymentSel1 />} />

      <Route path="/05-payment-sel" element={<PaymentSel2 />} />

      <Route path="/04-exploration" element={<Exploration />} />

      <Route path="/00-landing-page" element={<LandingPage />} />

      <Route path="/00-landing-page1" element={<LandingPage1 />} />

      <Route path="/00-landing-page2" element={<LandingPage2 />} />

      <Route path="/00-landing-page3" element={<LandingPage3 />} />

      <Route path="/00-landing-page4" element={<LandingPage4 />} />

      <Route path="/00-landing-page5" element={<LandingPage5 />} />

      <Route path="/00-landing-page6" element={<LandingPage6 />} />

      <Route
        path="/export-to-code-errors-delete-me-anytime"
        element={<ExportToCodeErrorsDelete />}
      />

      <Route path="/frame-12" element={<FrameComponent />} />

      <Route path="/ingestion-vol-tt" element={<IngestionVolTT />} />

      <Route path="/ingestion-vol-tt1" element={<IngestionVolTT1 />} />

      <Route path="/ingestion-vol-tt2" element={<IngestionVolTT2 />} />

      <Route path="/alert-sum-tt" element={<AlertSumTT />} />

      <Route path="/group-20" element={<GroupComponent1 />} />

      <Route path="/group-19" element={<GroupComponent2 />} />

      <Route path="/group-12" element={<GroupComponent3 />} />

      <Route path="/group-18" element={<GroupComponent4 />} />

      <Route path="/group-14" element={<GroupComponent5 />} />

      <Route path="/group-17" element={<GroupComponent6 />} />

      <Route path="/group-13" element={<GroupComponent7 />} />

      <Route path="/group-11" element={<GroupComponent8 />} />

      <Route path="/02-logging-cost" element={<LoggingCost />} />

      <Route path="/group-15" element={<GroupComponent9 />} />

      <Route path="/group-16" element={<GroupComponent10 />} />

      <Route path="/group-33" element={<GroupComponent11 />} />

      <Route path="/group-32" element={<GroupComponent12 />} />

      <Route path="/01-alert-summary" element={<AlertSummary />} />
    </Routes>
    </QueryClientProvider>
  );
}
export default App;
