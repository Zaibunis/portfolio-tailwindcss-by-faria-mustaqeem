import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center h-[80px] bg-[#1E1E6D]">
      <div className="text-xl font-bold text-white">Faria's Portfolio</div>
      <ul className="flex justify-center space-x-6">
        <li id="hover-home">
          <Link href="/home" className="text-white hover:text-[#9e9ee9] ">
            Home
          </Link>
        </li>
        <li id="hover-about">
          <Link href="/about" className="text-white hover:text-[#9e9ee9] ">
            About
          </Link>
        </li>
        <li id="hover-skills">
          <Link href="/skills" className="text-white hover:text-[#9e9ee9] ">
            Skills
          </Link>
        </li>
        <li id="hover-projects">
          <Link href="/projects" className="text-white hover:text-[#9e9ee9] ">
            Projects
          </Link>
        </li>
        <li id="hover-resumes">
          <Link href="/resumes" className="text-white hover:text-[#9e9ee9] ">
            Resumes
          </Link>
        </li>
        <li id="hover-contact">
          <Link href="/contact" className="text-white hover:text-[#9e9ee9]">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
