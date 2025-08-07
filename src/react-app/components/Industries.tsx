export default function Industries() {
  const industries = [
    "Tømrere", "VVS'ere", "Murerfirmaer", "Malere", "Elektrikere", 
    "Mekanikere", "Låsesmede", "Rengøring", "Anlægsgartnere"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            🎁 Vi laver hjemmesider til alle faggrupper
          </h2>
          <p className="text-xl text-gray-600">
            Uanset hvilket fag du arbejder inden for, har vi erfaring med at lave hjemmesider der fungerer
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <span 
              key={index}
              className="bg-white px-6 py-3 rounded-full shadow-md text-gray-700 font-medium hover:shadow-lg transition-shadow duration-300"
            >
              {industry}
            </span>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Er dit fag ikke på listen? Det gør ikke noget – vi tilpasser os alle typer virksomheder!
          </p>
        </div>
      </div>
    </section>
  );
}
