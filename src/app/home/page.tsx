

import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-[#12123E] text-beige text-center min-h-screen py-10">
      {/* Title Section */}
      <div className="mb-10">
        <h1 className="text-white font-bold text-4xl mb-4">Journey of mine! 😎</h1>
        <p className="text-white text-lg max-w-2xl mx-auto">
          Embarking on the journey of coding and learning programming languages is akin to setting sail on an uncharted sea.
          The landscape is vast, the waters sometimes tumultuous, but the destination is endlessly rewarding. 🎉🎊
        </p>
      </div>

      {/* First Paragraph */}
      <div className="mb-8">
        <p className=" text-white text-lg max-w-3xl mx-auto">
          As a beginner, my journey begins with a spark of curiosity. Maybe it is the allure of creating something from scratch, 
          or the desire to understand the technology that powers our world. You start with the basics, perhaps choosing a language 
          like TypeScript for its simplicity and readability. ☺
        </p>
      </div>

      {/* Hello World Section */}
      <div className="mb-8">
        <p className=" text-white text-2xl mb-4">The first steps are filled with discovery and small triumphs. You write your first lines of code, and the screen echoes back 🎗"Hello, World!"🎗</p>
        <div className="flex justify-center">
         <Image
 src="/OIP.jpeg" 
 alt="Calculator App" 
 width={300} 
 height={150} 
         />
        </div>
      </div>

      {/* Second Paragraph */}
      <div className="mb-8">
        <p className=" text-white text-lg max-w-3xl mx-auto">
          A humble yet significant milestone. Each new concept is a stepping stone: variables, loops, conditionals, and functions. These building blocks form the foundation of your coding knowledge.
        </p>
      </div>

      {/* Challenges Section */}
      <div className="mb-8">
        <p className=" text-white text-2xl">
          Along the way, you encounter challenges. Syntax errors and bugs test your patience, but they also sharpen your problem-solving skills. Every obstacle becomes a learning opportunity. 💗
        </p>
        <div className="flex justify-center mt-4">
          <Image
          alt='Challenges'
          src="/tttt.jpeg" 
          width={300}
          height={150} 
          />
        </div>
      </div>

      {/* Project Building Section */}
      <div className="mb-8">
        <p className=" text-white text-2xl">
          As you gain confidence, you start building your own projects. Simple calculators, to-do lists, and even small games. Each project is a manifestation of your learning and creativity.
        </p>
        <div className="flex justify-center mt-4">
          <Image
          src='/calcu.PNG'
          alt='PROJECTS'
          width={300}
          height={150}
          />
        </div>
      </div>

      {/* Coding Mindset Section */}
      <div className="mb-8">
        <p className=" text-white text-2xl max-w-3xl mx-auto">
          Coding is more than just writing code. It is about thinking logically, breaking down problems, and designing efficient solutions. You begin to see the world through the lens of a programmer.
        </p>
        <div className="flex justify-center mt-4">
       
        </div>
      </div>

      
    </div>
  );
}
