// ----------------------------
// IMPORTS SECTION
// ----------------------------

import Home from "/src/pages/Home";
import AboutMe from "/src/pages/AboutMe";
import Experience from "/src/pages/Experience";
import Projects from "/src/pages/Projects";
import Footer from "./Footer";

// ----------------------------
// COMPONENT DEFINITION
// ----------------------------

/**
 * Main scrollable window offset to fit the fixed Header and NavBar components.
 * Contains all the key sections (pages).
 * 
 * @component
 * @returns {React.ReactElement} MainLayout component
 */
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
