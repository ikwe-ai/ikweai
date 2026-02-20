import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import Index from "./pages/Index";
import Research from "./pages/Research";
import Reports from "./pages/Reports";
import Architecture from "./pages/Architecture";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Audit from "./pages/Audit";
import NotFound from "./pages/NotFound";
import WritingLibrary from "./pages/WritingLibrary";
import CaseStudies from "./pages/CaseStudies";
import Press from "./pages/Press";
import BeforeTheViolation from "./pages/writings/BeforeTheViolation";
import RecognitionIsNotSafety from "./pages/writings/RecognitionIsNotSafety";
import AIGovernanceCompliance from "./pages/writings/AIGovernanceCompliance";
import ChooseYourPath from "./pages/writings/ChooseYourPath";
import CaseStudyDetail from "./pages/cases/CaseStudyDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* Canonical public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/research" element={<Research />} />
          <Route path="/outputs" element={<Reports />} />
          <Route path="/technology/architecture" element={<Architecture />} />
          <Route path="/about" element={<About />} />
          <Route path="/consult" element={<Contact />} />
          <Route path="/contact" element={<Navigate to="/consult" replace />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/research/writings" element={<WritingLibrary />} />
          <Route path="/research/case-studies" element={<CaseStudies />} />
          <Route path="/research/case-studies/:slug" element={<CaseStudyDetail />} />
          <Route path="/research/press" element={<Press />} />
          <Route path="/research/writings/before-the-violation" element={<BeforeTheViolation />} />
          <Route
            path="/research/writings/ai-governance-is-becoming-a-compliance-issue"
            element={<AIGovernanceCompliance />}
          />
          <Route path="/research/writings/choose-your-path" element={<ChooseYourPath />} />
          <Route path="/research/writings/recognition-is-not-safety" element={<RecognitionIsNotSafety />} />

          {/* Legacy redirects */}
          <Route path="/proof" element={<Navigate to="/research/case-studies" replace />} />
          <Route path="/inquiry" element={<Navigate to="/consult" replace />} />
          <Route path="/case-studies" element={<Navigate to="/research/case-studies" replace />} />
          <Route path="/writings" element={<Navigate to="/research/writings" replace />} />
          <Route path="/writing-library" element={<Navigate to="/research/writings" replace />} />
          <Route path="/research/before-the-violation/*" element={<Navigate to="/research/writings/before-the-violation" replace />} />
          <Route
            path="/research/canon/ai-governance-compliance/*"
            element={<Navigate to="/research/writings/ai-governance-is-becoming-a-compliance-issue" replace />}
          />
          <Route path="/choose-your-path/*" element={<Navigate to="/research/writings/choose-your-path" replace />} />
          <Route
            path="/research/recognition-is-not-safety/*"
            element={<Navigate to="/research/writings/recognition-is-not-safety" replace />}
          />
          <Route path="/enterprise" element={<Navigate to="/about" replace />} />
          <Route path="/why-independent" element={<Navigate to="/about" replace />} />
          <Route path="/founder" element={<Navigate to="/about" replace />} />
          <Route path="/terms" element={<Navigate to="/about" replace />} />
          <Route path="/research-access-terms" element={<Navigate to="/outputs" replace />} />
          <Route path="/press" element={<Navigate to="/research/press" replace />} />
          <Route path="/downloads/*" element={<Navigate to="/outputs" replace />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
