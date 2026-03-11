import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Alan Kinsella, Dominican College Galway",
    location: "Galway",
    rating: 5,
    text: "VoltSafe recently installed a scoreboard on our hockey pitch, and we were extremely pleased with the work. John and his team carried out the installation to a very high standard, completing the job efficiently, professionally, and on schedule. We would have no hesitation in recommending VoltSafe and would be very happy to work with them again in the future."
  },
  {
    name: "Michael Murphy",
    location: "Cork",
    rating: 5,
    text: "Top quality work on our home battery system."
  },
  {
    name: "Emma Walsh",
    location: "Dublin",
    rating: 5,
    text: "Professional, reliable and eco-conscious."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-16">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="mb-4">"{t.text}"</p>

              <div className="text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-gray-600">{t.location}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;