import data from "/src/data/home";

function Header() {
  const header = data.header

  return (
    <header className="z-50 fixed flex justify-center items-center h-18 w-full bg-background border-b border-primary">
      <nav>
        <ul className="space-x-20 font-mono font-bold text-primary">
          <a href="#about" className="hover:text-secondary transition">{header.item1}</a>
          <a href="#experience" className="hover:text-secondary transition">{header.item2}</a>
          <a href="#projects" className="hover:text-secondary transition">{header.item3}</a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
