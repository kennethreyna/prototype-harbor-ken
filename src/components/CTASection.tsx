
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-portfolio-navy to-portfolio-navy/90 text-white">
      <div className="portfolio-container text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to bring your vision to life?</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm currently available for new projects and collaborations. Let's create something amazing together.
          </p>
          <Link to="/contact" className="inline-flex items-center bg-portfolio-teal hover:bg-portfolio-teal/80 text-white font-medium py-4 px-8 rounded-md transition-colors text-lg group">
            Work With Me
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
