import Hero from '@/react-app/components/Hero';
import Services from '@/react-app/components/Services';
import Features from '@/react-app/components/Features';
import Pricing from '@/react-app/components/Pricing';
import Process from '@/react-app/components/Process';
import Contact from '@/react-app/components/Contact';
import Industries from '@/react-app/components/Industries';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Features />
      <Pricing />
      <Process />
      <Contact />
      <Industries />
      <Footer />
    </div>
  );
}
