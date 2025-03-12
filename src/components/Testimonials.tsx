
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Kenneth transformed our outdated interface into a sleek, intuitive experience that our customers love. His thoughtful approach to design challenges and user-centered focus made all the difference.",
    name: "Sarah Johnson",
    title: "Product Manager, HealthTech Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    quote: "Working with Kenneth was a game-changer for our startup. He not only delivered beautiful designs but also helped us uncover and solve key user problems we hadn't even identified yet.",
    name: "David Chen",
    title: "Co-founder, Finovo",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    quote: "Kenneth's design work was instrumental in helping us increase user engagement by 40%. His ability to balance aesthetics with functionality is truly exceptional.",
    name: "Emma Rodriguez",
    title: "UX Director, Global Travel Co.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-portfolio-offwhite">
      <div className="portfolio-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Client Testimonials</h2>
          <p className="text-lg text-portfolio-slate/80 max-w-2xl mx-auto">
            What clients and collaborators have to say about working with me.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
            <div className="absolute -top-6 left-10 text-portfolio-teal">
              <Quote size={48} />
            </div>
            
            <div className="min-h-[250px] md:min-h-[200px] flex flex-col justify-center">
              <p className="text-xl md:text-2xl italic text-portfolio-slate mb-8 pt-6">
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-portfolio-navy">{testimonials[activeIndex].name}</h4>
                  <p className="text-portfolio-slate/70">{testimonials[activeIndex].title}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white p-3 rounded-full shadow hover:bg-portfolio-navy hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-portfolio-teal' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="bg-white p-3 rounded-full shadow hover:bg-portfolio-navy hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
