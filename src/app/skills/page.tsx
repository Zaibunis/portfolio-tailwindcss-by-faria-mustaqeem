
"use client"; // Make this a client component

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#12123E] mt-0 flex flex-col items-center justify-center font-[Josefin] text-white">
      {/* Skills Header */}
      <div className=" mt-10 text-center mb-8">
        <h1 className="text-5xl mt-0 font-extrabold underline">Skills:</h1>
      </div>

      {/* HTML Skill */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">HTML 🙂</h2>
        <div className="flex justify-center items-center space-x-2 mt-2">
          <i className="fa fa-star text-orange-500 text-5xl"></i>
          <i className="fa fa-star text-orange-500 text-5xl"></i>
          <i className="fa fa-star text-orange-500 text-5xl"></i>
          <i className="fa fa-star text-orange-500 text-5xl"></i>
          <i className="fa fa-star text-gray-500 text-3xl"></i>
        </div>
      </div>

      {/* CSS Skill */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">CSS 😁</h2>
        <div className="flex justify-center items-center space-x-2 mt-2">
          <i className="fa fa-star text-orange-500 text-3xl"></i>
          <i className="fa fa-star text-orange-500 text-3xl"></i>
          <i className="fa fa-star text-orange-500 text-3xl"></i>
          <i className="fa fa-star text-orange-500 text-3xl"></i>
          <i className="fa fa-star text-gray-500 text-3xl"></i>
        </div>
      </div>

      {/* TypeScript Skill */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">TypeScript 😊</h2>
        <div className="flex justify-center items-center space-x-2 mt-2">
          <i className="fa fa-star text-orange-500 text-3xl"></i>
          <i className="fa fa-star text-orange-500 text-3xl"></i>
          <i className="fa fa-star text-orange-500 text-3xl"></i>
          <i className="fa fa-star text-orange-500 text-3xl"></i>
          <i className="fa fa-star text-gray-500 text-3xl"></i>
        </div>
      </div>

{/* Hire Me Section */}
<div className="bg-[#1E1E6D] py-10 mt-10 ml-5">
        <h1 className="text-white font-bold text-4xl mb-6 ml-10">Why should you hire me?</h1>
        <div className="flex justify-center">
        <div className="eighthPara py-10">
      <p className="text-white text-2xl text-center leading-relaxed max-w-4xl mx-auto">
        Because I write clean, maintainable code that not only makes my fellow developers smile but also ensures that future updates are a breeze.
        Because I complete projects faster than a coffee-fueled coder on a deadline, ensuring that your timelines are met without sacrificing quality.
        Because I have a knack for crafting visually stunning websites using CSS that not only catch the eye but also provide an engaging user experience—think of it as giving your site a stylish makeover! 💖
      </p>
    </div>
        </div>
      </div>

    </div>
  );
}
