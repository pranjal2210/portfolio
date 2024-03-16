import Home from "./components/Home";
import "./App.css";
import Layout from "./components/Layout";
import About from "./components/About";
import Education from "./components/Education";

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Education />
      {/* <Work />
      <Skills />
      <Projects />
      <Contact /> */}
    </Layout>
  );
}

export default App;
