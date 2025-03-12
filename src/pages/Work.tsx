
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { useEffect } from 'react';

const projects = [
  {
    id: 'health-app',
    title: 'Health App Redesign',
    description: 'A comprehensive redesign of a health tracking application to improve user engagement and simplify daily tracking.',
    categories: ['UX Research', 'UI Design', 'Prototyping'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    color: 'bg-blue-50',
  },
  {
    id: 'fintech-platform',
    title: 'Fintech Platform',
    description: 'An investment platform redesign focused on simplifying complex financial data for novice investors.',
    categories: ['UX Design', 'Visual Design', 'Design System'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    color: 'bg-emerald-50',
  },
  {
    id: 'travel-companion',
    title: 'Travel Companion',
    description: 'A travel planning app that helps users discover, plan and navigate their journey with personalized recommendations.',
    categories: ['UX Strategy', 'Interaction Design', 'User Testing'],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1721&q=80',
    color: 'bg-orange-50',
  },
  {
    id: 'e-commerce-redesign',
    title: 'E-Commerce Redesign',
    description: 'Reimagining the shopping experience for a fashion retailer to increase conversion and average order value.',
    categories: ['E-Commerce', 'Conversion Optimization', 'Visual Design'],
    image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    color: 'bg-purple-50',
  },
  {
    id: 'productivity-app',
    title: 'Productivity App',
    description: 'A task management application designed to help users stay organized and increase productivity.',
    categories: ['UI Design', 'User Testing', 'Design System'],
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
    color: 'bg-yellow-50',
  },
  {
    id: 'smart-home',
    title: 'Smart Home Hub',
    description: 'A central dashboard for controlling smart home devices with intuitive controls and automation setup.',
    categories: ['IoT', 'Dashboard Design', 'User Research'],
    image: 'https://images.unsplash.com/photo-1558002038-1055e2221b55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    color: 'bg-indigo-50',
  }
];

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Work | Kenneth Reyna";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 md:pt-32">
        <section className="py-12">
          <div className="portfolio-container">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-portfolio-navy">My Work</h1>
              <p className="text-xl text-portfolio-slate/80">
                A curated selection of projects showcasing my approach to solving design challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="project-card group"
                >
                  <Link to={`/work/${project.id}`} className="block">
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 w-full text-white">
                          <div className="flex justify-between items-center">
                            <h3 className="text-xl font-bold">{project.title}</h3>
                            <ArrowUpRight size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.categories.map(category => (
                          <span 
                            key={category} 
                            className="text-xs font-medium bg-gray-100 px-3 py-1 rounded-full text-portfolio-slate/80"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-portfolio-slate/80">{project.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Work;
