import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              Subscribe to our newsletter
            </h3>
            <p className="text-sm text-gray-900 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-6 md:mt-0">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-whi"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gray-50 text-black rounded-r-md hover:bg-white"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-900 mt-2 md:mt-0 md:ml-4">
              By subscribing you agree to our{" "}
              <Link href="#" className="text-black hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/Logo.png"
              alt="Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Courses</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  Business
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  Programming
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Resources</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  Career
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-indigo-600">
                  Learning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  Interview Preparation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">About Us</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  Help/Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-900 hover:text-indigo-600">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2023 Ddsgnr. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-900 hover:text-indigo-600">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-900 hover:text-indigo-600">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-900 hover:text-indigo-600">
              Cookies Settings
            </Link>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#">
              <Image
                src="/Facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/Instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image src="/tiwe.png" alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image
                src="/LinkedIn.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;