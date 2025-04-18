function Header() {
  return (
    <header className="fixed flex justify-center items-center h-18 w-full border-b bg-[#d8afe9] border-[#1A274B]">
      <nav>
        <ul className="space-x-20 font-mono font-bold text-[#1A274B]">
          <a href="#about" className="hover:text-[#A94D0F] transition">00. about me</a>
          <a href="#experience" className="hover:text-[#A94D0F] transition">01. experience</a>
          <a href="#projects" className="hover:text-[#A94D0F] transition">02. projects</a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
