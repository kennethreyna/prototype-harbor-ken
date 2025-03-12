
import { Lightbulb, Search, PenTool, Figma, Layers, Users } from 'lucide-react';

const processSteps = [
  {
    icon: <Search size={32} />,
    title: 'Research',
    description: 'I dive deep into understanding user needs, market trends, and business goals to inform my design decisions.',
  },
  {
    icon: <Lightbulb size={32} />,
    title: 'Ideation',
    description: 'Exploring multiple directions through sketching, wireframing, and collaborative ideation sessions.',
  },
  {
    icon: <PenTool size={32} />,
    title: 'Design',
    description: 'Creating high-fidelity mockups and interactions that align with user expectations and business objectives.',
  },
  {
    icon: <Figma size={32} />,
    title: 'Prototype',
    description: 'Building interactive prototypes that simulate the real experience for effective user testing and validation.',
  },
  {
    icon: <Users size={32} />,
    title: 'Test',
    description: 'Conducting usability testing and gathering feedback to refine and improve the design.',
  },
  {
    icon: <Layers size={32} />,
    title: 'Iterate',
    description: 'Continuously improving the solution based on real user feedback and quantitative data.',
  },
];

const DesignProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-portfolio-navy text-white">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">My Design Process</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A human-centered approach focused on solving real problems and delivering exceptional experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-colors duration-300"
            >
              <div className="text-portfolio-teal mb-5">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
