import { Users, Award, CheckCircle, Star } from "lucide-react";

const ChooseVoltsSafe = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Why Choose VoltSafe */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose VoltSafe?
            </h2>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Local Expertise, Nationwide Service
                  </h3>
                  <p className="text-gray-600">
                    Based in Galway, VoltSafe serves all of Connacht with reliable, quality electrical solutions. We respond to all inquiries within 24 hours, ensuring you get the service you need when you need it.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Safe Electric Approved
                  </h3>
                  <p className="text-gray-600">
                    VoltSafe is a Registered Electrical Contractor with Safe Electric, qualifying customers for SEAI grants and ensuring the highest standards of safety and quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Decades of Experience
                  </h3>
                  <p className="text-gray-600">
                    VoltSafe has been providing expert, reliable electrical services for over 30 years, with a proven track record of successful projects across Ireland and Europe. 
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Testimonial Card */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4"> What Our Customers Say </h2>

            <p className="text-gray-700 mb-4">
              “VoltSafe recently installed a scoreboard on our hockey pitch, and we were extremely pleased with the work. John and his team carried out the installation to a very high standard, completing the job efficiently, professionally, and on schedule.
            </p>
            <p className="text-gray-700 mb-4">
              We would have no hesitation in recommending VoltSafe and would be very happy to work with them again in the future.”
            </p>

            <div className="text-sm text-gray-600 font-semibold">
              – Dr. Alan Kinsella, Dominican College Galway
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChooseVoltsSafe;