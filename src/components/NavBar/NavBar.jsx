import NavBarItem from "./NavBarItem";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons"

function NavBar() {
  return (
    <nav className="top-18 fixed flex flex-col items-center justify-center h-[calc(100vh-72px)] w-25 gap-3 bg-amber-200">
      <NavBarItem icon={faLinkedin} to="https://www.linkedin.com/in/kyurijung" />
      <NavBarItem icon={faGithub} to="https://github.com/kyurijung" />
      <NavBarItem icon={faFile} to="./src/assets/files/KyuriJung.pdf" />
      <NavBarItem icon={faEnvelope} to="mailto:kyuri.jg@gmail.com" />
    </nav>
  );
}

export default NavBar;
