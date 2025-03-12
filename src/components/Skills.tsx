
const skills = {
  design: [
    'User Interface Design',
    'User Experience Design',
    'Interaction Design',
    'Visual Design',
    'Responsive Design',
    'Design Systems',
    'Information Architecture',
    'Wireframing & Prototyping',
  ],
  research: [
    'User Research',
    'Usability Testing',
    'A/B Testing',
    'Competitive Analysis',
    'Heuristic Evaluation',
    'User Journey Mapping',
    'Persona Development',
    'Survey Design',
  ],
  tools: [
    'Figma',
    'Adobe XD',
    'Sketch',
    'InVision',
    'Principle',
    'Webflow',
    'Zeplin',
    'Abstract',
  ]
};

const Skills = () => {
  return (
    <section className="py-16 md:py-24 bg-portfolio-offwhite">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Skills & Expertise</h2>
          <p className="text-lg text-portfolio-slate/80 max-w-2xl mx-auto">
            A comprehensive toolkit that enables me to solve complex design challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-portfolio-navy">Design</h3>
            <ul className="space-y-3">
              {skills.design.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-teal rounded-full mr-3"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-portfolio-navy">Research</h3>
            <ul className="space-y-3">
              {skills.research.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-coral rounded-full mr-3"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-portfolio-navy">Tools</h3>
            <ul className="space-y-3">
              {skills.tools.map((skill, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-portfolio-navy rounded-full mr-3"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
