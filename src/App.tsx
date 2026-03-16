import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import { useAnalytics } from "@/hooks/useAnalytics";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SiteAssistant from "@/components/SiteAssistant";

import Index from "./pages/Index";
import EqSafetyBenchmark from "./pages/EqSafetyBenchmark";
import SampleReport from "./pages/SampleReport";
import Audit from "./pages/Audit";
import Trust from "./pages/Trust";
import Contact from "./pages/Contact";
import Archive from "./pages/Archive";
import NotFound from "./pages/NotFound";
import Research from "./pages/Research";

import Architecture from "./pages/Architecture";
import About from "./pages/About";
import Consultation from "./pages/Consultation";
import WritingLibrary from "./pages/WritingLibrary";
import CaseStudies from "./pages/CaseStudies";
import Press from "./pages/Press";
import IpNotice from "./pages/IpNotice";
import BeforeTheViolation from "./pages/writings/BeforeTheViolation";
import RecognitionIsNotSafety from "./pages/writings/RecognitionIsNotSafety";
import AIGovernanceCompliance from "./pages/writings/AIGovernanceCompliance";
import ChooseYourPath from "./pages/writings/ChooseYourPath";
import EmotionalAiHighTrustEnvironments from "./pages/writings/EmotionalAiHighTrustEnvironments";
import CaseStudyDetail from "./pages/cases/CaseStudyDetail";
import GetStarted from "./pages/GetStarted";

const queryClient = new QueryClient();

const LegacyCaseStudyRedirect = () => {
  const { slug } = useParams();
  return <Navigate to={slug ? `/archive/research/case-studies/${slug}` : "/archive/research/case-studies"} replace />;
};

const AnalyticsManager = () => {
  useAnalytics();
  return null;
};

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1));
      const target = document.getElementById(id);
      if (target) {
        requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
      }
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsManager />
        <ScrollManager />
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/benchmark" element={<EqSafetyBenchmark />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research.html" element={<Navigate to="/research" replace />} />
          <Route path="/deliverables" element={<Navigate to="/audit#deliverables-previews" replace />} />
          <Route path="/samples" element={<Navigate to="/audit#deliverables-previews" replace />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/audit.html" element={<Navigate to="/audit" replace />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/intake" element={<Contact />} />
          <Route path="/intake.html" element={<Navigate to="/intake" replace />} />
          <Route path="/request-audit" element={<Navigate to="/intake" replace />} />
          <Route path="/request-evaluation" element={<Navigate to="/intake" replace />} />
          <Route path="/request-evaluation-intake" element={<Navigate to="/intake" replace />} />
          <Route path="/evaluation-request" element={<Navigate to="/intake" replace />} />
          <Route path="/archive" element={<Archive />} />

          <Route path="/outputs" element={<Navigate to="/audit#deliverables-previews" replace />} />
          <Route path="/reports" element={<Navigate to="/audit#deliverables-previews" replace />} />
          <Route path="/sample-report" element={<SampleReport />} />
          <Route path="/contact" element={<Navigate to="/intake" replace />} />
          <Route path="/contact.html" element={<Navigate to="/intake" replace />} />
          <Route path="/inquiry" element={<Navigate to="/intake" replace />} />
          <Route path="/audit-request" element={<Navigate to="/intake" replace />} />
          <Route path="/request-audit-intake" element={<Navigate to="/intake" replace />} />

          <Route path="/privacy" element={<Navigate to="/privacy.html" replace />} />
          <Route path="/terms" element={<Navigate to="/terms.html" replace />} />
          <Route path="/research-access-terms" element={<Navigate to="/research-access-terms.html" replace />} />

          <Route path="/archive/about" element={<About />} />
          <Route path="/archive/architecture" element={<Architecture />} />
          <Route path="/archive/consult" element={<Consultation />} />
          <Route path="/archive/ip-notice" element={<IpNotice />} />
          <Route path="/archive/eq-safety-benchmark" element={<Navigate to="/benchmark" replace />} />
          <Route path="/archive/research/writings" element={<WritingLibrary />} />
          <Route path="/archive/research/writings/before-the-violation" element={<BeforeTheViolation />} />
          <Route
            path="/archive/research/writings/ai-governance-is-becoming-a-compliance-issue"
            element={<AIGovernanceCompliance />}
          />
          <Route path="/archive/research/writings/choose-your-path" element={<ChooseYourPath />} />
          <Route
            path="/archive/research/writings/recognition-is-not-safety"
            element={<RecognitionIsNotSafety />}
          />
          <Route
            path="/archive/research/writings/emotional-ai-high-trust-environments"
            element={<EmotionalAiHighTrustEnvironments />}
          />
          <Route path="/archive/research/case-studies" element={<CaseStudies />} />
          <Route path="/archive/research/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/archive/research/press" element={<Press />} />

          <Route path="/about" element={<Navigate to="/archive/about" replace />} />
          <Route path="/about.html" element={<Navigate to="/archive/about" replace />} />
          <Route path="/why-independent" element={<Navigate to="/archive/about" replace />} />
          <Route path="/founder" element={<Navigate to="/archive/about" replace />} />
          <Route path="/technology/architecture" element={<Navigate to="/archive/architecture" replace />} />
          <Route path="/consult" element={<Navigate to="/archive/consult" replace />} />
          <Route path="/consultation" element={<Navigate to="/archive/consult" replace />} />
          <Route path="/request-consultation" element={<Navigate to="/archive/consult" replace />} />
          <Route path="/ip-notice" element={<Navigate to="/archive/ip-notice" replace />} />
          <Route path="/ip" element={<Navigate to="/archive/ip-notice" replace />} />
          <Route path="/intellectual-property" element={<Navigate to="/archive/ip-notice" replace />} />
          <Route path="/eq-safety-benchmark" element={<Navigate to="/benchmark" replace />} />
          <Route path="/eqsb" element={<Navigate to="/benchmark" replace />} />
          <Route path="/research/writings" element={<Navigate to="/archive/research/writings" replace />} />
          <Route
            path="/research/writings/before-the-violation"
            element={<Navigate to="/archive/research/writings/before-the-violation" replace />}
          />
          <Route
            path="/research/writings/ai-governance-is-becoming-a-compliance-issue"
            element={<Navigate to="/archive/research/writings/ai-governance-is-becoming-a-compliance-issue" replace />}
          />
          <Route
            path="/research/writings/choose-your-path"
            element={<Navigate to="/archive/research/writings/choose-your-path" replace />}
          />
          <Route
            path="/research/writings/recognition-is-not-safety"
            element={<Navigate to="/archive/research/writings/recognition-is-not-safety" replace />}
          />
          <Route
            path="/research/writings/emotional-ai-high-trust-environments"
            element={<Navigate to="/archive/research/writings/emotional-ai-high-trust-environments" replace />}
          />
          <Route
            path="/research/before-the-violation/*"
            element={<Navigate to="/archive/research/writings/before-the-violation" replace />}
          />
          <Route
            path="/research/canon/ai-governance-compliance/*"
            element={<Navigate to="/archive/research/writings/ai-governance-is-becoming-a-compliance-issue" replace />}
          />
          <Route
            path="/choose-your-path/*"
            element={<Navigate to="/archive/research/writings/choose-your-path" replace />}
          />
          <Route
            path="/research/recognition-is-not-safety/*"
            element={<Navigate to="/archive/research/writings/recognition-is-not-safety" replace />}
          />
          <Route path="/research/case-studies" element={<Navigate to="/archive/research/case-studies" replace />} />
          <Route path="/research/case-studies/:slug" element={<LegacyCaseStudyRedirect />} />
          <Route path="/research/press" element={<Navigate to="/archive/research/press" replace />} />
          <Route path="/press" element={<Navigate to="/archive/research/press" replace />} />

          <Route path="/proof" element={<Navigate to="/archive/research/case-studies" replace />} />
          <Route path="/case-studies" element={<Navigate to="/archive/research/case-studies" replace />} />
          <Route path="/writings" element={<Navigate to="/archive/research/writings" replace />} />
          <Route path="/writing-library" element={<Navigate to="/archive/research/writings" replace />} />
          <Route path="/enterprise" element={<Navigate to="/" replace />} />
          <Route path="/explorer" element={<Navigate to="/research" replace />} />
          <Route path="/research-summary" element={<Navigate to="/research" replace />} />
          <Route path="/support" element={<Navigate to="/intake" replace />} />
          <Route path="/sample-outputs" element={<Navigate to="/audit#deliverables-previews" replace />} />
          <Route path="/audit-and-validation" element={<Navigate to="/audit" replace />} />
          <Route path="/audit-validation" element={<Navigate to="/audit" replace />} />
          <Route path="/faq" element={<Navigate to="/trust" replace />} />
          <Route path="/downloads/*" element={<Navigate to="/audit#deliverables-previews" replace />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <SiteAssistant />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
