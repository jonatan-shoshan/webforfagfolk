export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Du kontakter os og fortæller lidt om din forretning"
    },
    {
      number: "2", 
      title: "Vi sender dig et forslag og fast pris"
    },
    {
      number: "3",
      title: "Du godkender – og vi går i gang"
    },
    {
      number: "4",
      title: "Din nye hjemmeside er klar inden for 3-5 dage"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            👣 Sådan foregår det
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-lg text-gray-700">{step.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
