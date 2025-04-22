import Home from "/src/pages/Home";
import AboutMe from "/src/pages/AboutMe";
import Experience from "/src/pages/Experience";
import Projects from "/src/pages/Projects";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div className="ml-25 mt-18 flex flex-col">
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default MainLayout;
