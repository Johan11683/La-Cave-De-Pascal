import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Footer from '@/components/Footer/Footer';
import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import WhyUs from '@/components/WhyUs/WhyUs';



export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
      <WhyUs />
      <Contact />
      <Footer />
    </>
  );
}
