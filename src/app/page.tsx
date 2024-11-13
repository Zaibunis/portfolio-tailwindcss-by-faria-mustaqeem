
import Navbar from "../navbar";
import Index from "../index"
import Home from "./home/page"
import About from "./about/page"
import Skills from "./skills/page";
import Projects from "./projects/page";
import Resume from "./resumes/page";
import Contact from "./contact/page";

export default function Front() {
  return (
    <div>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>
        <Navbar />
          <Index />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}
   