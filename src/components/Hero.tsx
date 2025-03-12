
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="portfolio-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-navy mb-6 leading-tight">
              Creating intuitive & impactful digital experiences
            </h1>
            <p className="text-xl text-portfolio-slate mb-8 max-w-2xl">
              I'm Kenneth, a product designer specializing in user-centered design
              that solves real problems and delights users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/work" className="btn-primary flex items-center justify-center sm:justify-start">
                View My Work
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link to="/contact" className="btn-secondary flex items-center justify-center sm:justify-start">
                Work With Me
              </Link>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
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
  );
};

export default Hero;
