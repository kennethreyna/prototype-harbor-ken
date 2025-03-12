
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/data/projects';

interface NextProjectProps {
  project: Project;
}

const NextProject = ({ project }: NextProjectProps) => {
  return (
    <section className="py-12">
      <div className="portfolio-container">
        <div className="text-center mb-8">
          <h3 className="text-lg text-portfolio-slate/70 mb-2">Next Project</h3>
          <h2 className="text-3xl font-bold">{project.title}</h2>
        </div>
        <Link 
          to={`/work/${project.id}`}
          className="block relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] aspect-[21/9]"
        >
          <img 
            src={project.featuredImage} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end justify-center">
            <div className="text-white p-8 text-center">
              <span className="inline-flex items-center font-medium">
                View Project
                <ArrowRight size={18} className="ml-2" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default NextProject;
