import React, { useState } from "react";

const QuoteForm = ({ isModal = false, onClose = null }) => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

  const validate = (data) => {
    let tempErrors = {};

    if (!data.get("name").trim()) tempErrors.name = "Name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.get("email")))
      tempErrors.email = "Enter a valid email address";

    const phone = data.get("phone").replace(/\s/g, "");
    if (phone.length < 7) tempErrors.phone = "Enter a valid phone number";

    if (!data.get("location").trim())
      tempErrors.location = "Please provide your location";

    if (data.get("message").trim().length < 5)
      tempErrors.message = "Please provide a bit more detail about the job";

    return tempErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerMessage("");

    const formData = new FormData(e.target);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    formData.append("access_key", "2f9041d4-19ef-46ca-81d4-b8aee42a816b");
    formData.append(
      "subject",
      `New Quote: ${formData.get("name")} - ${formData.get("location")}`
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setServerMessage("Thanks! Your quote request has been sent.");
        e.target.reset();

        if (onClose) {
          setTimeout(() => onClose(), 2000);
        }
      } else {
        setServerMessage("Something went wrong. Please try again.");
      }
    } catch {
      setServerMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formClass = isModal
    ? "bg-white p-6 rounded-xl shadow-xl max-w-lg w-full mx-4"
    : "bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto";

  return (
    <div className={formClass}>
      {isModal && (
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">
            Request a Free Quote
          </h3>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />

        <div>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className={`w-full p-3 border rounded ${
              errors.name ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className={`w-full p-3 border rounded ${
                errors.email ? "border-red-500" : "border-slate-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className={`w-full p-3 border rounded ${
                errors.phone ? "border-red-500" : "border-slate-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <input
            name="location"
            type="text"
            placeholder="Eircode or Town (e.g. Galway City)"
            className={`w-full p-3 border rounded ${
              errors.location ? "border-red-500" : "border-slate-300"
            }`}
          />
          {errors.location && (
            <p className="text-red-500 text-xs mt-1">{errors.location}</p>
          )}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="What do you need help with?"
            rows="4"
            className={`w-full p-3 border rounded ${
              errors.message ? "border-red-500" : "border-slate-300"
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Request Free Quote"}
        </button>

        {serverMessage && (
          <p className="text-center text-sm text-slate-700">{serverMessage}</p>
        )}
      </form>
    </div>
  );
};

export default QuoteForm;