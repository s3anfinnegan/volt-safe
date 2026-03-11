import { Car, Lightbulb, FireExtinguisher, CircleCheckBig } from "lucide-react";

const services = [
  {
    icon: <Car className="w-8 h-8 text-emerald-600" />,
    title: "EV Charger Installation",
    description:
      "Installation of EV charging solutions with SEAI grant eligibility"
  },
  {
    icon: <FireExtinguisher className="w-8 h-8 text-emerald-600" />,
    title: "Fire Alarm Systems",
    description:
      "Design, installation, testing, and maintenance of fire alarm systems"
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-emerald-600" />,
    title: "Emergency Lighting",
    description: "Reliable emergency lighting systems for safety and compliance"
  },
  {
    icon: <CircleCheckBig className="w-8 h-8 text-emerald-600" />,
    title: "Inspections & Testing",
    description: "IS 10101:2020 aligned inspections, testing, and certification services"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Electrical Services</h2>
          <p className="text-xl text-gray-600">
            Specialists in fire alarms, emergency lighting, and EV charger installations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;