import Home from "./components/Home";
import "./App.css";
import Layout from "./components/Layout";
import About from "./components/About";
import Education from "./components/Education";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Education />
      <Work />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
