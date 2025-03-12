
interface ProjectGalleryProps {
  title: string;
  images: string[];
}

const ProjectGallery = ({ title, images }: ProjectGalleryProps) => {
  return (
    <section className="py-12 bg-white">
      <div className="portfolio-container">
        <h2 className="text-2xl font-bold mb-8">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img 
                src={image} 
                alt={`${title} design ${index + 1}`}
                className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
