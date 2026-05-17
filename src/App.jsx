import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Home from "./sections/Home";
import Navbar from "./components/Common/Navbar";
import useNavbar from "./hooks/useNavbar";
import useScrollAnimation from "./hooks/useScrollAnimation";
import "@styles/base/Base.scss";
import "@styles/base/Reset.scss";
import "@styles/base/Animation.scss";

function App() {
  useScrollAnimation();
  useNavbar();
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Education />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
