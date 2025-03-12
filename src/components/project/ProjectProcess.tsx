
import { ProjectProcess } from '@/data/projects';

interface ProjectProcessProps {
  process: ProjectProcess[];
}

const ProjectProcess = ({ process }: ProjectProcessProps) => {
  return (
    <section className="py-12">
      <div className="portfolio-container">
        <h2 className="text-2xl font-bold mb-12">Design Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-portfolio-teal/10 text-portfolio-teal flex items-center justify-center font-bold text-lg mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-portfolio-slate/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectProcess;
