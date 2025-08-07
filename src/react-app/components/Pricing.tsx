import { Check } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      name: "Basis-pakke",
      price: "5.000 kr.",
      description: "Enkel 1-sides hjemmeside",
      features: [
        "Kontaktformular og Google Maps",
        "Hostingvejledning eller vi klarer det for dig"
      ],
      popular: false
    },
    {
      name: "Standard-pakke",
      price: "8.500 kr.",
      description: "Flere sider (f.eks. om os, services, kontakt, anmeldelser)",
      features: [
        "Opsætning på eget domæne",
        "Op til 5 sektioner + ekstra support"
      ],
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            📦 Pris og pakker
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative bg-white p-8 rounded-xl shadow-lg ${pkg.popular ? 'ring-2 ring-blue-600' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Mest populær
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-4xl font-bold text-blue-600 mb-2">{pkg.price}</p>
                <p className="text-gray-600">{pkg.description}</p>
              </div>
              
              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="#kontakt"
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                  pkg.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Vælg denne pakke
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
