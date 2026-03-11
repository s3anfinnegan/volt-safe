import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm text-gray-300">
          We use cookies to improve your experience on our website. 
          By clicking "Accept", you consent to the use of cookies.
        </p>

        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-4 py-2 border border-gray-500 rounded-lg text-sm hover:bg-gray-800"
          >
            Decline
          </button>

          <button
            onClick={acceptCookies}
            className="px-4 py-2 bg-emerald-600 rounded-lg text-sm hover:bg-emerald-700"
          >
            Accept
          </button>
        </div>

      </div>
    </div>
  );
};

export default CookieBanner;