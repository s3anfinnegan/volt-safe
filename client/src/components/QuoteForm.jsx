import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

const QuoteForm = ({ isModal = false, onClose = null }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });

  // const services = [
  //   "EV Charger Installation",
  //   "Fire Alarm Systems",
  //   "Emergency Lighting",
  //   "Inspections & Testing",
  //   "Commercial Electrical Work",
  //   "Smart Home Setup",
  //   "Other",
  // ];

  // Validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9+()\-\s]{7,20}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, location, message } = formData;

    if (!name || !email || !phone || !location || !message) {
      alert("⚠️ Please fill in all fields before submitting.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("⚠️ Please enter a valid phone number.");
      return;
    }

    try {
      const response = await fetch(
        "https://voltsafe-api.onrender.com/send-quote",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert(
          "✅ Thank you! We’ll contact you within 24 hours with your free quote."
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          location: "",
          message: "",
        });

        if (onClose) onClose();
      } else {
        alert("⚠️ Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert(
        "⚠️ Unable to send your message. Please check your internet connection."
      );
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formClass = isModal
    ? "bg-white p-6 rounded-lg shadow-xl max-w-lg w-full mx-4"
    : "bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-xl mx-auto";

  return (
    <div className={formClass}>
      {isModal && (
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">
            Get Your Free Quote
          </h3>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        {/* Phone + Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />

          <input
            type="text"
            name="location"
            placeholder="Your Location, e.g. Tuam"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        {/* Optional Service Dropdown */}
        {/*
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        >
          <option value="">Select Service Needed</option>

          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        */}

        {/* Message */}
        <textarea
          name="message"
          placeholder="Tell us about the work you need done"
          value={formData.message}
          onChange={handleChange}
          rows="3"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
        >
          Contact Us Today <ArrowRight size={20} />
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;