const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="md:col-span-2">
            <img
              src="/footer.svg"
              alt="VoltSafe Electrical Galway"
              className="h-12 w-auto"
            />

            <p className="text-gray-400 mb-4">
              Professional electrical services across Ireland. 
              SEAI approved contractor specialising in modern, eco-friendly solutions.
            </p>

            <div className="flex items-center gap-4 text-sm">
              <span>Safe Electric & SEAI Registered</span>
              <span>•</span>
              <span>Fully Insured</span>
              <span>•</span>
              <span>Decades of Experience</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>

            <ul className="space-y-2 text-sm">
              <li>EV Charger Installation</li>
              <li>Fire Alarm Systems</li>
              <li>Emergency Lighting</li>
              <li>Inspections & Testing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>

            <ul className="space-y-2 text-sm">
              <li>087 288 8202</li>
              <li>info@voltsafe.ie</li>
              <li>Galway, Ireland</li>
              <li>Nationwide Service</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">

          <div className="flex justify-center gap-6 mt-4 text-sm">
            <a href="/privacy" className="hover:text-emerald-400">
              Privacy Policy
            </a>

            <a href="/terms" className="hover:text-emerald-400">
              Terms & Conditions
            </a>
          </div>

          <p>© {new Date().getFullYear()} VoltSafe Ltd. All rights reserved.</p>

          <p>
            Website 🛠️ by{" "}
            <a
              href="https://www.seanfinnegan.xyz/route52"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-emerald-600"
            >
              Route 52 Engineering
            </a>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;