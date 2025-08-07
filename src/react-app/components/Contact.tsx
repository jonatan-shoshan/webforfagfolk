import { useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontakt" className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            📞 Klar til at komme i gang?
          </h2>
          <p className="text-xl text-blue-100">
            Skriv eller ring – vi vender tilbage inden for 24 timer:
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-lg">
              <Mail className="h-6 w-6 text-blue-200" />
              <span>kontakt@webforfagfolk.dk</span>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <Phone className="h-6 w-6 text-blue-200" />
              <span>22 33 44 55</span>
            </div>
            
            <div className="mt-8 p-6 bg-blue-500 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Hurtig respons garanteret</h3>
              <p className="text-blue-100">
                Vi svarer på alle henvendelser inden for 24 timer. Ofte meget hurtigere!
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white text-gray-900 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Send os en besked</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Navn *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Type virksomhed</label>
                <input
                  type="text"
                  name="business"
                  placeholder="F.eks. VVS, tømrer, maler..."
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Besked</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Fortæl os lidt om dit projekt..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send besked
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
