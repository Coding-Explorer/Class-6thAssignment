import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "James Nduku",
    role: "Software Developer",
    image: "/josph2.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    rating: 5,
  },
  {
    name: "Erick Kipkemboi",
    role: "Scrum Master",
    image: "/james.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    rating: 4,
  },
  {
    name: "Stephen Kerubo",
    role: "UI/UX Designer",
    image: "/leboo.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Customer Testimonials
        </h2>
        <p className="text-gray-900 text-center mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/Vector.png"
                    alt="Star"
                    width={20}
                    height={19}
                    className={`${
                      i < testimonial.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-900 italic mb-4">{testimonial.text}</p>

              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name} profile picture`}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-900">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;