import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed flex justify-center items-center h-18 w-full border-b bg-[#d8afe9] border-[#1A274B]">
      <nav>
        <ul className="space-x-20 font-mono font-bold text-[#1A274B]">
          <Link to="#about" className="hover:text-[#A94D0F] transition">00. About Me</Link>
          <Link to="#experience" className="hover:text-[#A94D0F] transition">01. Experience</Link>
          <Link to="#projects" className="hover:text-[#A94D0F] transition">02. Projects</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
