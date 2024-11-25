import React from "react";
import Image from "next/image";

const TopBar = () => {
  return (
    <div className="bg-[#F7F7F7] text-sm text-gray-700 hidden md:block">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 max-w-screen-lg mx-auto py-3 px-4">
        <div className="flex flex-col md:flex-row md:space-x-8 gap-2 md:gap-4">
          <div>
            <span>Phone Number: </span>
            <a href="tel:03452615590" className="text-black hover:underline">
              03452615590
            </a>
          </div>
          <div>
            <span>Email: </span>
            <a
              href="mailto:info@ddsgnr.com"
              className="text-black hover:underline"
            >
              info@ddsgnr.com
            </a>
          </div>
        </div>

        <div className="flex space-x-4">
          <a
            href="#"
            aria-label="Facebook"
            title="Facebook"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/Facebook.png"
              alt="Facebook"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            title="Instagram"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/Instagram.png"
              alt="Instagram"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            title="Twitter"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/tiwe.png"
              alt="Twitter"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/LinkedIn.png"
              alt="LinkedIn"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;