"use client";

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const typedElement = useRef(null);

  
  useEffect(() => {
    // Ensure the reference is set
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: [
          'And I am a passionate',
          'Web Developer with a solid foundation in HTML &amp; CSS',
          'a strong grasp of TypeScript',
          'and basics of Next.js',
        ],
        typeSpeed: 50,      // Speed of typing
        backSpeed: 30,      // Speed of backspacing
        backDelay: 1000,    // Delay before typing back
        loop: true,         // Infinite loop
      });

      // Cleanup function to destroy the Typed instance on component unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);

  




  return (
    <div>
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#161655]">
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">
            Salam! My name is <span className="text-purple-600">Faria</span>
          </h1>
          <span ref={typedElement} className="text-xl text-white"></span>
          <div className="mt-8 flex space-x-4">
            <a
              href="https://www.linkedin.com/in/zainab-mustaqeem-3367b5301/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Visit LinkedIn
            </a>
            <a
              href="https://github.com/Zaibunis"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gray-800 text-white px-4 py-2 rounded-lg"
            >
              Visit GitHub
            </a>
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <Image
          src="/bg.png" 
          alt="Background" 
          height={48}
          width={100}
          className="rounded-lg shadow-lg ml-10 w-full h-[500px] object-cover" 
          />
        </div>

      </section>
    </main>
    </div>
  );
}
