import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseVoltsSafe from "./components/ChooseVoltSafe";
import GrantSection from "./components/GrantSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import QuoteForm from "./components/QuoteForm";

function App() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">

      <Header openQuote={() => setShowQuoteModal(true)} />

      <Hero openQuote={() => setShowQuoteModal(true)} />

      <Services />

      <GrantSection openQuote={() => setShowQuoteModal(true)} />

      <WhyChooseVoltsSafe />

      {/* <Testimonials /> */}

      <ContactSection />

      <Footer />

      {showQuoteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <QuoteForm
            isModal={true}
            onClose={() => setShowQuoteModal(false)}
          />
        </div>
      )}

    </div>
  );
}

export default App;