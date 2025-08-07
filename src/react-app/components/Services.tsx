import { Globe, Settings, Clock } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Hjemmesider der virker",
      description: "Få en flot og brugervenlig side, der viser hvem du er, hvad du tilbyder, og hvordan kunderne kontakter dig."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Tilpasset dit fag",
      description: "Uanset om du er VVS'er, murer, elektriker, mekaniker, maler eller andet – vi tilpasser siden til netop din virksomhed."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast pris – hurtig levering",
      description: "Ingen overraskelser. Du får en fast pris og en side klar på få dage."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            🛠️ Hvad vi tilbyder
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🔹 {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
