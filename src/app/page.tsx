import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
