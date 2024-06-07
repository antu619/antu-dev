import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import SocialBar from "./components/SocialBar"


function App() {

  return (
    <>
      <Banner/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
      <div className="fixed bottom-5 right-5 z-50">
        <SocialBar/>
      </div>
    </>
  )
}

export default App
