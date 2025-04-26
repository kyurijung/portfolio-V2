import data from "/src/data/home";

import NavBarItem from "./NavBarItem";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons"

function NavBar() {
  const navBar = data.navBar
  const iconMap = {
    linkedin: faLinkedin,
    github: faGithub,
    resume: faFile,
    email: faEnvelope
  };

  return (
    <nav className="top-18 fixed flex flex-col items-center justify-center gap-3 h-[calc(100vh-72px)] w-25">
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
