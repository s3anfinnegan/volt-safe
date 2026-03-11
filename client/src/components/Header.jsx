import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const Header = ({ openQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">

          <div className="flex items-center">
            <img
              src="/header.svg"
              alt="VoltSafe Electrical Galway"
              /* We use h-14 on mobile and h-20 on desktop to make it pop */
              className="h-14 md:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* <a href="#services" className="text-gray-700 hover:text-emerald-600 font-medium">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 font-medium">
              About
            </a> */}
            {/* <a href="#contact" className="text-gray-700 hover:text-emerald-600 font-medium">
              Contact
            </a> */}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone size={16} className="mr-1" />
              <span>+353 87 288 8202</span>
            </div>

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
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">

              {/* <a href="#services" className="text-gray-700 hover:text-emerald-600 font-medium">
                Services
              </a> */}

              {/* <a href="#about" className="text-gray-700 hover:text-emerald-600 font-medium">
                About
              </a> */}

              <a href="#contact" className="text-gray-700 hover:text-emerald-600 font-medium">
                Contact
              </a>

              <div className="flex items-center text-sm text-gray-600 pt-2 border-t">
                <Phone size={16} className="mr-1" />
                <span>087 288 8202</span>
              </div>

              <button
                onClick={openQuote}
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