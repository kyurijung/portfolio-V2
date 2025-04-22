import data from "/src/data/home";

function Footer() {
  const footer = data.footer

  return (
    <div id="footer" className="pt-5 h-25 flex justify-end">
      <hr className="absolute left-1/2 -translate-x-1/2 w-[75%]"></hr>
      <p className="absolute mt-3 pr-[13%] text-sm text-[#1A274B]">
        © 2025 <a href={footer.link} className="underline">kyurijung.github.io</a> by Kyuri Jung
      </p>
    </div>
  );
}

export default Footer;
