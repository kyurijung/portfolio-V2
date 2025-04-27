// ----------------------------
// IMPORTS SECTION
// ----------------------------

// Local data import containing NavBar items
import data from "/src/data/home";

// NavBarItem component
import NavBarItem from "./NavBarItem";

// Font Awesome icons
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons"

// ----------------------------
// COMPONENT DEFINITION
// ----------------------------

/**
 * Fixed vertical navigation bar component that displays clickable icon links.
 * 
 * @component
 * @returns {React.ReactElement} A fixed-position vertical navigation bar containing:
 * - LinkedIn profile link
 * - GitHub profile link
 * - Resume download link
 * - Email contact link
 */
function NavBar() {
  const navBar = data.navBar
  // Icon mapping object: NavBarItem titles => FontAwesome icons
  const iconMap = {
    linkedin: faLinkedin,
    github: faGithub,
    resume: faFile,
    email: faEnvelope
  };

  return (
    <nav className="top-18 fixed flex flex-col items-center justify-center gap-3 h-[calc(100vh-72px)] w-25">
      {/* Dynamically render navigation items */}
      {navBar.map((item, index) => (
        <NavBarItem
          key={index}
          icon={iconMap[item.title]}
          to={item.url}
        />
      ))}
    </nav>
  );
}

export default NavBar;
