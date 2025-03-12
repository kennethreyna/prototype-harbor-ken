
interface ProjectResultsProps {
  results: string;
}

const ProjectResults = ({ results }: ProjectResultsProps) => {
  return (
    <section className="py-12 bg-portfolio-navy text-white">
      <div className="portfolio-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Results</h2>
          <p className="text-xl">{results}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectResults;
