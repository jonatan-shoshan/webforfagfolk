import { Check } from 'lucide-react';

export default function Features() {
  const features = [
    "En komplet hjemmeside (mobilvenlig og hurtig)",
    "Dit logo, farver og billeder",
    "En kontaktformular og Google Maps integration",
    "Klar til Google (SEO-optimeret)",
    "Gratis support de første 30 dage",
    "Mulighed for billig vedligeholdelse"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            💼 Hvad får du med
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
