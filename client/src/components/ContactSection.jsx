import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import QuoteForm from "./QuoteForm";

const ContactSection = ({ openQuote }) => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-gray-600">
            Ready to upgrade your home or business? Contact our friendly team for expert advice.
          </p>
        </div>

        {/* Grid: Contact Info + Quote Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Call Us</div>
                <div className="text-gray-600">087 288 8202</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Email Us</div>
                <div className="text-gray-600">info@voltsafe.ie</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Based in</div>
                <div className="text-gray-600">Galway, Ireland</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Response Time</div>
                <div className="text-gray-600">Within 24 hours</div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;