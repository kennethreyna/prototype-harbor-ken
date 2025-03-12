
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="portfolio-container flex justify-between items-center">
        <Link to="/" className="text-xl font-display font-bold text-portfolio-navy hover:text-portfolio-teal transition-colors duration-300">
          Kenneth Reyna
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/work" className="nav-link">Work</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="btn-primary">Work With Me</Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-portfolio-navy focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20">
          <nav className="flex flex-col items-center space-y-8 p-8">
            <Link 
              to="/" 
              className="text-xl font-medium text-portfolio-navy hover:text-portfolio-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/work" 
              className="text-xl font-medium text-portfolio-navy hover:text-portfolio-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link 
              to="/about" 
              className="text-xl font-medium text-portfolio-navy hover:text-portfolio-teal transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="btn-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Work With Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
