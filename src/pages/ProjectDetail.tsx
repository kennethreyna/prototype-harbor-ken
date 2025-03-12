
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import projects from '@/data/projects';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectImage from '@/components/project/ProjectImage';
import ProjectOverview from '@/components/project/ProjectOverview';
import ProjectProcess from '@/components/project/ProjectProcess';
import ProjectGallery from '@/components/project/ProjectGallery';
import ProjectResults from '@/components/project/ProjectResults';
import NextProject from '@/components/project/NextProject';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === projectId);
  
  useEffect(() => {
    if (project) {
      window.scrollTo(0, 0);
      document.title = `${project.title} | Kenneth Reyna`;
    } else {
      navigate('/work');
    }
  }, [project, navigate]);
  
  if (!project) {
    return null;
  }

  const nextProject = projects.find(p => p.id === project.nextProject);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28 md:pt-32">
        <ProjectHero project={project} />
        <ProjectImage src={project.featuredImage} alt={project.title} />
        <ProjectOverview project={project} />
        <ProjectProcess process={project.process} />
        <ProjectGallery title={project.title} images={project.images} />
        <ProjectResults results={project.results} />
        {nextProject && <NextProject project={nextProject} />}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
