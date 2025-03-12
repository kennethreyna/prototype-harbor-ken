
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import CTASection from '@/components/CTASection';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About | Kenneth Reyna";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 md:pt-32">
        <section className="py-12 md:py-16">
          <div className="portfolio-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-portfolio-navy">About Me</h1>
                <p className="text-xl mb-6">
                  I'm Kenneth Reyna, a product designer with over 6 years of experience creating intuitive and impactful digital experiences.
                </p>
                <p className="mb-4">
                  My approach to design focuses on deep understanding of user needs, business goals, and technical constraints. I believe the best products come from collaborative processes and iterative design thinking.
                </p>
                <p className="mb-4">
                  Throughout my career, I've worked across various industries including healthcare, fintech, e-commerce, and travel, creating solutions that not only look beautiful but also solve real problems for users.
                </p>
                <p className="mb-4">
                  When I'm not designing, you'll find me hiking the trails of Northern California, experimenting with new cooking recipes, or attending design meetups to stay connected with the community.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-portfolio-teal/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-portfolio-coral/20 rounded-full blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Kenneth Reyna" 
                  className="w-full h-auto rounded-2xl shadow-xl relative z-10 object-cover aspect-[4/5] max-w-md mx-auto lg:ml-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        <Skills />
        <Experience />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
