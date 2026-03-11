import { Award } from "lucide-react";

const GrantSection = ({ openQuote }) => {
  return (
    <section className="py-20 bg-emerald-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <Award className="w-16 h-16 mx-auto mb-6 text-emerald-200" />

        <h2 className="text-4xl font-bold mb-6">
          EV Charger Grants for Homes & Businesses
        </h2>

        <p className="text-xl mb-8">
          Save up to €300 on home EV charger installations and up to €5,000 for workplaces with SEAI grants. We handle the entire process for you, just ask our team for details!
        </p>

        <button
          onClick={openQuote}
          className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          Book a Free Charger Consultation Today 
        </button>
      </div>
    </section>
  );
};

export default GrantSection;