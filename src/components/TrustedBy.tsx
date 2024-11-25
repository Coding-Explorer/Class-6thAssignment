import React from "react";
import Image from "next/image";
const TrustedBy = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start gap-20">
          <h3 className="text-xl font-bold text-gray-900">
            Trusted by 2000+ companies worldwide
          </h3>

          <div className="flex items-center">
            <Image
              src="/Logos.png"
              alt="Logo 1"
              width={900}
              height={400}
              className="h-12 grayscale hover:grayscale-0 transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;