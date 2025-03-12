
export interface ProjectProcess {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  role: string;
  duration: string;
  brief: string;
  description: string;
  challenge: string;
  solution: string;
  process: ProjectProcess[];
  results: string;
  featuredImage: string;
  images: string[];
  categories: string[];
  prototype: string;
  color: string;
  nextProject: string;
}

const projects: Project[] = [
  {
    id: 'health-app',
    title: 'Health App Redesign',
    client: 'HealthTrack Inc.',
    year: '2022',
    role: 'Lead Product Designer',
    duration: '3 months',
    brief: 'Redesign the HealthTrack mobile app to improve user engagement and simplify the daily tracking process for health metrics.',
    description: `
      This project involved a comprehensive redesign of a health tracking application to improve user engagement and simplify the process of tracking daily health metrics.

      The existing app had a low retention rate, with users finding it difficult to maintain consistent tracking habits. Through user research, we identified key pain points including a complex data entry process, confusing data visualization, and lack of actionable insights.

      Working closely with stakeholders, I led the redesign process from research through to high-fidelity prototypes and developer handoff.
    `,
    challenge: 'The main challenge was creating an interface that balanced comprehensive health tracking with simplicity and ease of use. Users wanted detailed insights without feeling overwhelmed by data entry.',
    solution: 'I designed a streamlined tracking experience with one-tap inputs for common activities, customizable dashboards, and AI-powered insights that highlighted meaningful patterns in user data.',
    process: [
      {
        title: 'Research',
        description: 'Conducted user interviews, competitive analysis, and usability testing on the existing app to identify pain points and opportunities.'
      },
      {
        title: 'Information Architecture',
        description: "Restructured the app's navigation and data hierarchy to prioritize daily actions and make insights more accessible."
      },
      {
        title: 'Wireframing',
        description: 'Created low-fidelity wireframes to explore multiple approaches to the tracking interface and dashboard views.'
      },
      {
        title: 'Visual Design',
        description: 'Developed a clean, accessible visual language with a focus on clear data visualization and gentle visual cues.'
      },
      {
        title: 'Prototyping',
        description: 'Built interactive prototypes to validate the new tracking flows and dashboard interactions with users.'
      },
      {
        title: 'Testing & Iteration',
        description: 'Conducted usability testing with the target audience and refined the design based on feedback.'
      }
    ],
    results: 'The redesigned app launched to positive user feedback, with a 40% increase in daily active users and a 25% improvement in user retention over three months. The average time spent on tracking activities decreased by 30%, while user satisfaction scores increased by 45%.',
    featuredImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    images: [
      'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    ],
    categories: ['UX Research', 'UI Design', 'Prototyping'],
    prototype: 'https://www.figma.com',
    color: 'bg-blue-50',
    nextProject: 'fintech-platform'
  },
  {
    id: 'fintech-platform',
    title: 'Fintech Platform',
    client: 'Finovo',
    year: '2021',
    role: 'Product Designer',
    duration: '4 months',
    brief: 'Create an investment platform that simplifies complex financial data for novice investors while providing powerful tools for experienced users.',
    description: `
      This project focused on redesigning an investment platform to make financial data more accessible to novice investors while maintaining the advanced functionality needed by experienced users.
      
      The challenge was to create an interface that could present complex financial information in an intuitive way, helping users make informed investment decisions without feeling overwhelmed.
      
      I worked with a cross-functional team including financial analysts, developers, and marketing specialists to ensure the design met both user needs and business requirements.
    `,
    challenge: 'The main challenge was balancing simplicity for new investors with the depth of information required by experienced traders, all while maintaining compliance with financial regulations.',
    solution: 'I designed a progressive disclosure interface that presented essential information upfront with the ability to explore more detailed data as needed, combined with contextual education elements.',
    process: [
      {
        title: 'User Research',
        description: 'Conducted interviews with both novice and experienced investors to understand their different mental models and needs.'
      },
      {
        title: 'Information Architecture',
        description: 'Created a layered information architecture that allowed for progressive disclosure of financial data complexity.'
      },
      {
        title: 'Wireframing',
        description: 'Developed wireframes focusing on clear data hierarchy and intuitive navigation patterns.'
      },
      {
        title: 'Visual Design',
        description: 'Designed a clean, professional visual system with careful attention to data visualization best practices.'
      },
      {
        title: 'Prototyping',
        description: 'Created interactive prototypes to test complex interactions like portfolio analysis and trade execution.'
      },
      {
        title: 'Usability Testing',
        description: 'Conducted testing with different user segments to validate that the interface served both novice and expert needs.'
      }
    ],
    results: 'The platform launched successfully and saw a 35% increase in new user acquisition in the first quarter, with a significant reduction in support tickets related to interface confusion. The average time to complete first investment decreased by 50%.',
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1715&q=80',
      'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    ],
    categories: ['UX Design', 'Visual Design', 'Design System'],
    prototype: 'https://www.figma.com',
    color: 'bg-emerald-50',
    nextProject: 'travel-companion'
  },
  {
    id: 'travel-companion',
    title: 'Travel Companion',
    client: 'Voyager Co.',
    year: '2021',
    role: 'UX/UI Designer',
    duration: '3 months',
    brief: 'Design a travel app that helps users discover, plan, and navigate their journey with personalized recommendations and local insights.',
    description: `
      This project involved creating a travel planning application that would help users discover new destinations, plan detailed itineraries, and navigate their journeys with ease.
      
      The app needed to provide personalized recommendations based on user preferences, integrate with travel booking services, and offer offline functionality for travelers in areas with limited connectivity.
      
      I led the UX/UI design process from concept to final delivery, working closely with travel industry experts and the development team.
    `,
    challenge: 'The key challenge was designing an interface that could handle the complexity of travel planning (accommodations, activities, transportation, etc.) while keeping the experience simple and enjoyable.',
    solution: 'I created a modular planning system with smart defaults and personalized suggestions, combined with a clean, visually rich interface that inspired travel while maintaining usability.',
    process: [
      {
        title: 'User Research',
        description: 'Conducted interviews and surveys with frequent travelers to understand pain points in current travel planning processes.'
      },
      {
        title: 'Journey Mapping',
        description: 'Created comprehensive journey maps for different traveler personas to identify key touch points and opportunities.'
      },
      {
        title: 'Information Architecture',
        description: 'Developed a structured approach to organizing complex travel information while maintaining discoverability.'
      },
      {
        title: 'Wireframing',
        description: 'Created wireframes focusing on key user flows including destination discovery, itinerary planning, and navigation.'
      },
      {
        title: 'Visual Design',
        description: 'Designed a vibrant, inspiring visual system that balanced beautiful imagery with functional UI elements.'
      },
      {
        title: 'Prototyping & Testing',
        description: 'Built interactive prototypes and conducted usability testing to refine the experience.'
      }
    ],
    results: 'The app launched to positive reviews, achieving a 4.7/5 app store rating in its first month. Users particularly praised the personalized recommendations and ease of planning complex multi-destination trips.',
    featuredImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1721&q=80',
    images: [
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    ],
    categories: ['UX Strategy', 'Interaction Design', 'User Testing'],
    prototype: 'https://www.figma.com',
    color: 'bg-orange-50',
    nextProject: 'health-app'
  },
];

export default projects;
