
import { Mail, Linkedin, Dribbble, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-portfolio-navy text-white py-16">
      <div className="portfolio-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kenneth Reyna</h3>
            <p className="text-gray-300 mb-4">
              Product designer crafting thoughtful digital experiences that enhance people's lives.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-portfolio-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className="text-gray-300 hover:text-portfolio-teal transition-colors">
                <Dribbble size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-300 hover:text-portfolio-teal transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-portfolio-teal transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/work" className="text-gray-300 hover:text-portfolio-teal transition-colors">Work</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-portfolio-teal transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-portfolio-teal transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Case Studies</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/work/health-app" className="text-gray-300 hover:text-portfolio-teal transition-colors">Health App Redesign</Link>
              </li>
              <li>
                <Link to="/work/fintech-platform" className="text-gray-300 hover:text-portfolio-teal transition-colors">Fintech Platform</Link>
              </li>
              <li>
                <Link to="/work/travel-companion" className="text-gray-300 hover:text-portfolio-teal transition-colors">Travel Companion</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="flex items-center mb-2">
              <Mail size={16} className="mr-2 text-portfolio-teal" />
              <a href="mailto:hello@kennethreyna.com" className="text-gray-300 hover:text-portfolio-teal transition-colors">
                hello@kennethreyna.com
              </a>
            </div>
            <p className="text-gray-300 mt-4">Based in San Francisco, CA</p>
            <div className="mt-6">
              <Link to="/contact" className="btn-secondary">Let's work together</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Kenneth Reyna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
