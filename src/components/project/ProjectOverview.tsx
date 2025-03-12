
import { Project } from '@/data/projects';

interface ProjectOverviewProps {
  project: Project;
}

const ProjectOverview = ({ project }: ProjectOverviewProps) => {
  return (
    <section className="py-12 bg-white">
      <div className="portfolio-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="whitespace-pre-line">{project.description}</p>
            </div>
          </div>
          <div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">The Challenge</h3>
              <p>{project.challenge}</p>
              
              <h3 className="text-xl font-bold mt-8 mb-4">The Solution</h3>
              <p>{project.solution}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
