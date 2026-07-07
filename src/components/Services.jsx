import { Car, Sun, BatteryCharging, Thermometer, FireExtinguisher, CircleCheckBig, CheckCircle, Phone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Car className="w-7 h-7 text-emerald-600" />,
    title: "EV Chargers",
    description: "Fast, safe home and business EV charging with SEAI grant eligibility."
  },
  {
    icon: <Sun className="w-7 h-7 text-emerald-600" />,
    title: "Solar Panels",
    description: "High performance solar systems designed for maximum savings."
  },
  {
    icon: <BatteryCharging className="w-7 h-7 text-emerald-600" />,
    title: "Battery Storage & Backup Systems",
    description: "Store your energy and keep the power on when you need it most."
  },
  {
    icon: <Thermometer className="w-7 h-7 text-emerald-600" />,
    title: "Heat Pumps",
    description: "Efficient heating and cooling for year-round comfort."
  },
  {
    icon: <FireExtinguisher className="w-7 h-7 text-emerald-600" />,
    title: "Fire Alarms & Emergency Lighting",
    description: "Design, installation, testing, and maintenance for safety and compliance."
  },
  {
    icon: <CircleCheckBig className="w-7 h-7 text-emerald-600" />,
    title: "Inspections & Testing",
    description: "IS 10101:2020 aligned inspections, testing, and certification services."
  }
];

const credentials = [
  "Safe Electric Registered",
  "SEAI Approved",
  "Fully Insured"
];

const Services = ({ openQuote }) => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            From electrical safety to renewable energy, a tailored solution for every home and business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Services List */}
          <div className="lg:col-span-3 divide-y divide-gray-200 border-t border-b border-gray-200">
            {services.map((service, i) => (
              <div key={i} className="flex items-start gap-6 py-8">
                <div className="shrink-0 w-16 h-16 rounded-full border-2 border-emerald-600 flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Consultation CTA */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24 bg-emerald-900 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Book Your Consultation Today</h3>
              <p className="text-emerald-100 mb-6">
                Let's find the right solution for your home or business.
              </p>

              <div className="space-y-3 mb-8">
                {credentials.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-emerald-300 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={openQuote}
                className="w-full bg-white text-emerald-900 px-6 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2 mb-4"
              >
                Get Your Free Quote <ArrowRight size={20} />
              </button>

              <a
                href="tel:0872888202"
                className="w-full border-2 border-white/40 px-6 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
