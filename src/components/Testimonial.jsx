import { useState } from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      text: "Fast, efficient, and user-friendly! Octal Accounts transformed our billing and inventory management. Couldn't be more satisfied.",
      author: "MALIK SHOAB"
    },
    {
      id: 2,
      text: "The best accounting software we've used. Reduced our monthly closing time by 70%!",
      author: "PRIYA SHARMA"
    },
    {
      id: 3,
      text: "Excellent customer support and constantly improving features. Highly recommended!",
      author: "RAJESH KUMAR"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-3xl mx-auto mt-5 px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
        See what our clients are saying!
      </h2>

      <div className="relative p-6 md:p-8 rounded-md">
        {/* Testimonial Content - Exact match to your image */}
        <div className="text-center space-y-4">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            "{testimonials[currentIndex].text}"
          </p>
          <p className="font-bold text-sm md:text-base text-gray-800 uppercase tracking-wider mt-2">
            {testimonials[currentIndex].author}
          </p>
        </div>

        {/* Navigation Arrows - Minimal design */}
        <button 
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white hover:bg-gray-50 rounded-full p-2 shadow-sm border border-gray-200"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white hover:bg-gray-50 rounded-full p-2 shadow-sm border border-gray-200"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;