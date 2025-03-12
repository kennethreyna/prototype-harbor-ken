
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="portfolio-container">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-lg text-portfolio-slate/80 max-w-2xl mx-auto">
            A selection of my most recent work across different industries and design challenges.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`rounded-2xl overflow-hidden ${project.color} p-6 md:p-8`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'}`}>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.categories.map(category => (
                        <span 
                          key={category} 
                          className="text-xs font-medium bg-white px-3 py-1 rounded-full text-portfolio-slate/80"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                    <p className="text-portfolio-slate/80 mb-6">{project.description}</p>
                  </div>
                  <Link 
                    to={`/work/${project.id}`} 
                    className="inline-flex items-center font-medium text-portfolio-teal hover:text-portfolio-navy transition-colors"
                  >
                    View Case Study
                    <ArrowUpRight size={18} className="ml-1" />
                  </Link>
                </div>
                <Link 
                  to={`/work/${project.id}`}
                  className={`block relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] ${index % 2 === 1 ? 'lg:order-first' : ''}`}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto aspect-[16/9] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/work" className="btn-secondary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
