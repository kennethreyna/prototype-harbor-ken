
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectHeroProps {
  project: Project;
}

const ProjectHero = ({ project }: ProjectHeroProps) => {
  return (
    <section className={`py-16 ${project.color}`}>
      <div className="portfolio-container">
        <div className="max-w-3xl">
          <Link to="/work" className="inline-flex items-center text-portfolio-slate hover:text-portfolio-teal transition-colors mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-portfolio-slate/80 mb-8 max-w-2xl">
            {project.brief}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <h3 className="text-sm text-portfolio-slate/60 mb-1">Client</h3>
              <p className="font-medium">{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm text-portfolio-slate/60 mb-1">Year</h3>
              <p className="font-medium">{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm text-portfolio-slate/60 mb-1">Role</h3>
              <p className="font-medium">{project.role}</p>
            </div>
            <div>
              <h3 className="text-sm text-portfolio-slate/60 mb-1">Duration</h3>
              <p className="font-medium">{project.duration}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.categories.map(category => (
              <span 
                key={category} 
                className="text-xs font-medium bg-white px-3 py-1 rounded-full text-portfolio-slate/80"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="inline-flex items-center">
            <a 
              href={project.prototype} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white hover:bg-portfolio-navy hover:text-white text-portfolio-navy px-6 py-3 rounded-md transition-colors font-medium"
            >
              View Interactive Prototype
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
