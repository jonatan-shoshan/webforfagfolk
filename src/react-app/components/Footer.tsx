import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">WebForFagfolk.dk</h3>
            <p className="text-gray-300 leading-relaxed">
              Vi laver simple, effektive hjemmesider til fagfolk og små erhverv. 
              Ingen bøvl, ingen smarte ord – bare noget der virker.
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">kontakt@webforfagfolk.dk</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300">22 33 44 55</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Vores services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Hjemmeside design</li>
              <li>Mobilvenlige sider</li>
              <li>SEO optimering</li>
              <li>Hosting assistance</li>
              <li>Vedligeholdelse</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 WebForFagfolk.dk. Alle rettigheder forbeholdt.
          </p>
        </div>
      </div>
    </footer>
  );
}
