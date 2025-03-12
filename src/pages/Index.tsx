
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import DesignProcess from '@/components/DesignProcess';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Kenneth Reyna | Product Designer";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProjects />
        <DesignProcess />
        <Skills />
        <Experience />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
