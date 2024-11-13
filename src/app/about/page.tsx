
"use client";

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function About() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'Web Developer and Tech enthusiast from Karachi, Pakistan',
          'My journey in web development began with a deep love',
          'for writing clean & maintainable code',
          'I am always eager to learn new features',
          '& stay updated with the latest technologies.',
        ],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);


  return (
    <div className="bg-[#000021] min-h-screen flex flex-col items-center font-['Playfair_Display'] text-center px-6 py-10">
      {/* About Section */}
      <section className="max-w-4xl">
        <h2 className="text-white text-2xl md:text-3xl font-bold underline italic mb-4">
          About Me
        </h2>

        <div>
          <h2 className="text-pink-300 text-xl md:text-2xl italic">Who am I</h2>
        </div>

        {/* Animated Text */}
        <div className="my-6 text-lg md:text-xl">
          <p className="text-white">
            Salam! My name is <span className="text-purple-300">Faria Mustaqeem</span>
          </p>
          <p className="text-white">And I am a passionate</p>
          <span ref={typedRef} className="text-white"></span>
        </div>

        {/* Personal Traits Section */}
        <h1 className="text-pink-300 text-2xl md:text-3xl font-bold italic mb-6">Personal Traits:</h1>

        <ul className="space-y-4 text-white">
          <li>
            <b className="text-pink-300">Problem Solver:</b>
            <p>Enjoy tackling complex problems and finding efficient solutions.</p>
          </li>
          <li>
            <b className="text-pink-300">Team Player:</b>
            <p>Thrive in collaborative environments and enjoy working with diverse teams.</p>
          </li>
          <li>
            <b className="text-pink-300">Continuous Learner:</b>
            <p>Always on the lookout for new challenges and opportunities to grow.</p>
          </li>
        </ul>

        {/* Additional Information */}
        <section className="mt-10">
          <p className="text-white font-medium leading-relaxed">
            I have a deep love for coding and designing clean, responsive websites that provide great user
            experiences. Currently, I am focused on honing my skills in HTML, CSS, JavaScript, and TypeScript,
            with a long-term goal of becoming a full-stack developer.
            <br />
            What excites me the most about web development is the endless opportunities to solve problems and
            create something impactful. I am constantly learning and staying up-to-date with the latest
            technologies to enhance my skill set. When I am not coding, I enjoy traveling, exploring new places,
            and diving deeper into coding.
          </p>
        </section>

        {/* Call to Action Button */}
        <button className="mt-8 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded  transform transition-transform duration-300 hover:scale-105 ">
          Let's Talk
        </button>
      </section>
    </div>
  );
}
