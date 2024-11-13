import React from 'react';
import Image from 'next/image';

export default function Projects() {
  return (
<div>
      <section
        id="experience"
        className="bg-gray-100 py-12 px-6 lg:px-24 flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold text-center text-[#1E1E6D] mb-8">
          Experience
        </h2>
        <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            As a dedicated and results-oriented junior developer, I am passionate
            about crafting innovative and user-friendly web applications. With a
            strong foundation in coding and design, I strive to continually
            improve my skills and stay up-to-date with the latest technologies. In
            my previous role as a web developer, I have successfully contributed to
            various projects. My ability to quickly learn new technologies and
            adapt to changing requirements has enabled me to consistently deliver
            high-quality solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            I am eager to continue expanding my skills and contribute to exciting
            projects in the field of web development.
          </p>
        </div>
      </section>
    
    <div>
    <div className="bg-[#000021] text-white font-playfair">
      <h1 className="text-4xl font-bold text-center py-8">🌟 Here is my creation where you can check my projects ⬇ 🌟</h1>
      <div className="text-center py-4">
        <button className="text-red-500 font-bold text-xl py-2 px-4 border-2 border-red-500 rounded-full">
          <a href="https://github.com/Zaibunis" target="_blank" rel="noopener noreferrer">
            Check it out on GitHub!✨
          </a>
        </button>
      </div>

      <div className="flex justify-center items-center space-x-8 py-8">
        {/* Amazon Clone Card */}
        <div className="w-80 bg-white text-black rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <Image
            src="/amazon.PNG"
            alt="Amazon-Clone"
            height={48}
            width={500}
            style={{ objectFit: 'cover' }}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold ">Amazon-Clone</h2>
            <button className="text-darkblue-500 py-2 px-4 font-bold rounded-md mt-4">
              <a href="https://vercel.com/api/toolbar/link/amazon-clone-by-faria-mustaqeem.vercel.app?via=project-dashboard-alias-list&p=1&page=/" target="_blank" rel="noopener noreferrer"  className="underline hover:text-blue-500">
                View Project
              </a>
            </button>
          </div>
        </div>

        {/* Simple Calculator Card */}
        <div className="w-80 bg-white text-black rounded-lg shadow-lg  transform transition-transform duration-300 hover:scale-105">
          <Image
            src="/calcu.PNG"
            alt="Simple-Calculator"
            height={8}
            width={500}
            style={{ objectFit: 'cover' }}
            className="rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold ">Simple-Calculator</h2>
            <button className="text-darkblue-500 py-2 px-4 font-bold rounded-md mt-4">
              <a  href="https://vercel.com/api/toolbar/link/simple-calculator-design.vercel.app?via=project-dashboard-alias-list&p=1&page=/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">
              View Project
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}
