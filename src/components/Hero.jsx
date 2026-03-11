import { Award, ArrowRight, Phone, CheckCircle } from "lucide-react";
import QuoteForm from "./QuoteForm";

const Hero = ({ openQuote }) => {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">
                Safe Electric Registered Contractor
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Reliable {" "}
              <span className="text-emerald-600">
                Electrical Solutions
              </span>{" "}
              for Irish Homes & Businesses
            </h1>

            <p className="text-xl text-gray-600 mb-8"> 
              VoltSafe Ltd provides professional electrical contracting services with a focus on safety, reliability, and compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">

              <button
                onClick={openQuote}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                Get Your Free EV Charger Quote <ArrowRight size={20} />
              </button>

              <a
                href="tel:0872888202"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>

            </div>

            <div className="flex items-center gap-8 text-sm text-gray-600">

              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-emerald-600" />
                <span>SEAI Approved</span>
              </div>

              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-emerald-600" />
                <span>Fully Insured</span>
              </div>

              <div className="flex items-center gap-1">
                <CheckCircle size={16} className="text-emerald-600" />
                <span>Safety & Compliance</span>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="lg:pl-12 w-full">
            <QuoteForm />
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;