import React from 'react';
import Image from 'next/image';

export default function Resume() {
  return (
    <div className="bg-[#12123E] text-white font-serif text-center py-8">
      <h1 className="text-4xl font-bold mb-8 bg-[#12123E]">
        <i>🌟Here is my creation where you can check my Resumes ⬇ 🌟</i>
      </h1>

      <div className="mb-8 ">
        <button className="text-red-500 font-bold text-xl py-2 px-4 border-2 border-red-500 rounded-full">
          <a href="https://github.com/Zaibunis" target="_blank" rel="noopener noreferrer">
            Check it out on GitHub!✨
          </a>
        </button>
      </div>

      <div className="flex justify-center gap-8 flex-wrap">
        {/* Static Resume Builder Card */}
        <div className="bg-white text-black rounded-lg shadow-lg w-72 p-4 transform transition-transform duration-300 hover:scale-105">
        import Image from 'next/image';

<Image
  src="/mile 1.PNG"
  alt="Static-Resume-Builder"
  height={32}
  width={500} // Or a specific width in pixels
  style={{ objectFit: 'cover' }}
  className="rounded-t-lg" // Adds rounded top corners
/>

          <h2 className="text-xl font-semibold mt-4 ">Static-Resume-Builder</h2>
          <button className="text-blue-600 mt-2 py-2 px-4 font-bold rounded-md ">
            <a href="https://mile-1-2-by-faria-mustaqeem.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">
              View Project
            </a>
          </button>
        </div>

        {/* Dynamic Resume Builder Card */}
        <div className="bg-white text-black rounded-lg shadow-lg w-72 p-4  transform transition-transform duration-300 hover:scale-105">
          <Image
          src="/mile 2.PNG" 
          alt="Dynamic-Resume-Builder" 
          height={32}
          width={500}
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg"
          />

          <h2 className="text-xl font-semibold mt-4">Dynamic-Resume-Builder</h2>
          <button className="text-blue-600 mt-2 py-2 px-4 font-bold rounded-md">
            <a href="https://mile-3-by-faria-mustaqeem.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">
              View Project
            </a>
          </button>
        </div>

        {/* Editable Resume Builder Card */}
        <div className="bg-white text-black rounded-lg shadow-lg w-72 p-4 transform transition-transform duration-300 hover:scale-105">
          <Image
          src="/mile 3.PNG" 
          alt="Editable-Resume-Builder" 
          style={{ objectFit: 'cover' }}
          height={32}
          width={500}
          className="rounded-t-lg" />

          <h2 className="text-xl font-semibold mt-4">Editable-Resume-Builder</h2>
          <button className="text-blue-600 mt-2 py-2 px-4 font-bold rounded-md">
            <a href="https://mile-4-by-faria-mustaqeem.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">
              View Project
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
