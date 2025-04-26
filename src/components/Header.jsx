import data from "/src/data/home";

function Header() {
  const header = data.header

  return (
    <header className="z-50 fixed flex justify-center items-center h-18 w-full bg-background border-b border-primary">
      <ul className="flex gap-20 font-mono font-bold text-primary">
        {header.map((item, index) => (
          <li key={index}>
            <a 
              href={`#${item.anchorLink}`}
              className="hover:text-secondary transition"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
