import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseVoltsSafe from "./components/ChooseVoltSafe";
import GrantSection from "./components/GrantSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import QuoteForm from "./components/QuoteForm";
import CookieBanner from "./components/CookieBanner";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function App() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const Home = () => (
    <>
      <Hero openQuote={() => setShowQuoteModal(true)} />
      <Services />
      <GrantSection openQuote={() => setShowQuoteModal(true)} />
      <WhyChooseVoltsSafe />
      <ContactSection />
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50">

      <Header openQuote={() => setShowQuoteModal(true)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />

      {showQuoteModal && (
        <div className="fixed inset-0 bg-emerald-900/30 backdrop-blur-sm flex items-center justify-center z-50">
          <QuoteForm
            isModal={true}
            onClose={() => setShowQuoteModal(false)}
          />
        </div>
      )}

      <CookieBanner />

    </div>
  );
}

export default App;