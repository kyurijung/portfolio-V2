import data from "/src/data/home";

import NavBarItem from "./NavBarItem";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons"

function NavBar() {
  const navbar = data.navbar

  return (
    <nav className="top-18 fixed flex flex-col items-center justify-center h-[calc(100vh-72px)] w-25 gap-3">
      <NavBarItem icon={faLinkedin} to={navbar.linkedin} />
      <NavBarItem icon={faGithub} to={navbar.github} />
      <NavBarItem icon={faFile} to={navbar.resume} />
      <NavBarItem icon={faEnvelope} to={navbar.email} />
    </nav>
  );
}

export default NavBar;
