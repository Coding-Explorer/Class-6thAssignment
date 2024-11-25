import React from "react";

const Achievements = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="relative mt-4"></div>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Achievements</h2>
          <p className="text-gray-900 mt-2 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300">
            <p className="text-gray-900 font-bold text-3xl">+200</p>
            <p className="text-gray-900">Courses</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300">
            <p className="text-black font-bold text-3xl">50K</p>
            <p className="text-gray-900">Mentors</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300">
            <p className="text-black font-bold text-3xl">370K</p>
            <p className="text-gray-900">Students</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow hover:shadow-xl transition-all duration-300">
            <p className="text-black font-bold text-3xl">100+</p>
            <p className="text-gray-900">Recognition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;