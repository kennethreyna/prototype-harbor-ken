
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Product Designer',
    company: 'Innovate Design',
    period: '2020 - Present',
    description: 'Lead designer for multiple high-profile financial and healthcare applications, working closely with cross-functional teams to deliver exceptional user experiences.',
    achievements: [
      'Redesigned the core product resulting in a 40% increase in user engagement',
      'Created and implemented a comprehensive design system',
      'Mentored junior designers and improved team design processes'
    ]
  },
  {
    role: 'Product Designer',
    company: 'Digital Craft Studios',
    period: '2018 - 2020',
    description: 'Responsible for end-to-end product design, from user research and ideation to high-fidelity mockups and prototypes.',
    achievements: [
      'Led the design of an award-winning mobile application',
      'Improved conversion rates by 25% through data-driven design iterations',
      'Established user testing protocols that became company standard'
    ]
  },
  {
    role: 'UI/UX Designer',
    company: 'Creative Solutions Inc.',
    period: '2016 - 2018',
    description: 'Designed user interfaces for web and mobile applications, collaborating with developers to ensure design integrity throughout implementation.',
    achievements: [
      'Redesigned the company website, improving lead generation by 35%',
      'Created visual designs and interactive prototypes for client presentations',
      'Conducted user interviews and usability tests to inform design decisions'
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="portfolio-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Work Experience</h2>
          <p className="text-lg text-portfolio-slate/80 max-w-2xl mx-auto">
            Over 6 years of experience designing digital products that solve real user problems.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-10">
              <div className="md:w-1/3">
                <div className="flex items-center mb-2">
                  <Briefcase size={18} className="text-portfolio-teal mr-2" />
                  <span className="font-medium text-portfolio-slate/70">{experience.period}</span>
                </div>
                <h3 className="text-xl font-bold">{experience.role}</h3>
                <p className="text-portfolio-navy/80">{experience.company}</p>
              </div>
              <div className="md:w-2/3">
                <p className="mb-4 text-portfolio-slate/80">{experience.description}</p>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-portfolio-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
