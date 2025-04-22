import data from "/src/data/home";

function Header() {
  const header = data.header

  return (
    <header className="z-50 fixed flex justify-center items-center h-18 w-full bg-[#F2ECE7] border-b border-[#1A274B]">
      <nav>
        <ul className="space-x-20 font-mono font-bold text-[#1A274B]">
          <a href="#about" className="hover:text-[#A94D0F] transition">{header.item1}</a>
          <a href="#experience" className="hover:text-[#A94D0F] transition">{header.item2}</a>
          <a href="#projects" className="hover:text-[#A94D0F] transition">{header.item3}</a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
