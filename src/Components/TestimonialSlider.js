import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "Gulmohar Township was in our corner at all times in both finding us our new home and selling our old one. He was always available and quickly responsive to our questions or concerns. I heartily recommend him to anyone who is either buying or selling a home. This guy is good!",
    author: "Jan W.",
  },
  {
    id: 2,
    text: "Gulmohar Township is the best director of Luxury Real Estate sales in DC. His professionalism, knowledge, attention to detail and marketing techniques are the best in the business. Highly Recommend!!",
    author: "Michael R.",
  },
  {
    id: 3,
    text: "Years ago my husband and I bought and sold several homes through Gulmohar Township and his team. We were seasoned investors, buying homes for flipping or for rentals. David helped us to accumulate an additional 6 million in investment properties. He was one of the best agents we had ever worked with and we are extremely pleased to see that he has returned to real estate sales. He is without a doubt the hardest working, most knowledgable, educated and well spoken agent we have ever meet. We are extremely impressed with his credentials, and it is with great pleasure that we recommend him to others looking for a world-class real estate agent.",
    author: "Robert P.",
  },
  {
    id: 4,
    text: "Gulmohar Township is a true professional...",
    author: "Mark D.",
  },
  { id: 5, text: "Another testimonial...", author: "John Doe" },
  { id: 6, text: "Great experience working with them...", author: "Jane Doe" },
  { id: 7, text: "Highly recommend their services...", author: "Emily R." },
  { id: 8, text: "Amazing real estate knowledge...", author: "Chris T." },
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <div className="text-center p-10">
      <h2 className="text-2xl  mb-6">WHAT MY CLIENTS HAVE TO SAY...</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
        {currentTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-6 border justify-center">
            <div className="flex justify-center">
              <FaQuoteLeft className="text-3xl text-gray-300 mb-4" />
            </div>
            <p className="text-gray-700 mb-4">{testimonial.text}</p>
            <p className="font-semibold">- {testimonial.author}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button onClick={prevPage} className="px-4 py-2 bg-gray-300 rounded">
          ‹
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              currentPage === index ? "bg-black text-white" : "bg-gray-300"
            } rounded`}
            onClick={() => setCurrentPage(index)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={nextPage} className="px-4 py-2 bg-gray-300 rounded">
          ›
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
