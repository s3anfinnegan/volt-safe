import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Added these
import { Phone, Menu, X } from "lucide-react";

const Header = ({ openQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Logic to handle Logo click
  const handleLogoClick = (e) => {
    e.preventDefault();
    
    if (location.pathname === "/") {
      // If already on Home, scroll to top smoothly
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // If on another page (like 404), go home
      navigate("/");
      window.scrollTo(0, 0);
    }
    
    // Close mobile menu if it's open
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">
          
          {/* Logo Section - Now Clickable */}
          <div className="flex items-center">
            <a href="/" onClick={handleLogoClick} className="block cursor-pointer">
              <img
                src="/header.svg"
                alt="VoltSafe Electrical Galway"
                className="h-14 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* Nav links can go here */}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+353872888202"
              className="flex items-center text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <Phone size={16} className="mr-2" />
              087 288 8202
            </a>

            <button
              onClick={openQuote}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t bg-white">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)} // Close menu on click
                className="text-gray-700 hover:text-emerald-600 font-medium"
              >
                Contact
              </a>

              <div className="flex items-center text-sm text-gray-600 pt-2 border-t">
                <Phone size={16} className="mr-1" />
                <span>087 288 8202</span>
              </div>

              <button
                onClick={() => {
                  openQuote();
                  setMobileMenuOpen(false);
                }}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors w-full"
              >
                Free Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;