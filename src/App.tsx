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
import NotFound from "./pages/NotFound";

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
          <Route path="/reports" element={<Reports />} />
          <Route path="/technology/architecture" element={<Architecture />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Legacy redirects */}
          <Route path="/audit" element={<Navigate to="/research" replace />} />
          <Route path="/proof" element={<Navigate to="/research" replace />} />
          <Route path="/inquiry" element={<Navigate to="/contact" replace />} />
          <Route path="/enterprise" element={<Navigate to="/about" replace />} />
          <Route path="/why-independent" element={<Navigate to="/about" replace />} />
          <Route path="/terms" element={<Navigate to="/about" replace />} />
          <Route path="/research-access-terms" element={<Navigate to="/reports" replace />} />
          <Route path="/press" element={<Navigate to="/about" replace />} />
          <Route path="/downloads/*" element={<Navigate to="/reports" replace />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
