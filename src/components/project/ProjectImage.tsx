
interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProjectImage = ({ src, alt, className = "" }: ProjectImageProps) => {
  return (
    <section className="py-12">
      <div className="portfolio-container">
        <img 
          src={src} 
          alt={alt}
          className={`w-full h-auto rounded-xl shadow-lg ${className}`}
        />
      </div>
    </section>
  );
};

export default ProjectImage;
