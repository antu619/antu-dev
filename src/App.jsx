import { Element } from "react-scroll"
import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import SocialBar from "./components/SocialBar"


function App() {
  return (
    <>
          <Banner />
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <div className="fixed bottom-5 right-5 z-50">
        <SocialBar/>
        </div>
    </>
  )
}

export default App;
