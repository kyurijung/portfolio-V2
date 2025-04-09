import ScrollIcon from "/src/components/ScrollIcon";

function Home() {
  return (
    <div className="ml-25 mt-18 flex flex-col">
      <div id="titleSection" className="h-[calc(100vh-72px)] bg-blue-200">
        <div className="pt-60">
          <h1 className="ml-20 leading-none text-[25px] font-mono font-bold text-[#1A274B]">Hi, my name is</h1>
          <h1 className="ml-18 leading-none text-[130px] font-extrabold text-[#1A274B]">Kyuri Jung.</h1>
          <h1 className="ml-20 mt-4 leading-none text-[30px] font-normal text-[#A94D0F]">Computer Science Student @CarletonU</h1>
        </div>
        <ScrollIcon></ScrollIcon>
      </div>

      <div id="about" className="h-dvh bg-amber-100">
      </div>

      <div id="experience" className="h-dvh bg-blue-200">
      </div>

      <div id="projects" className="h-dvh bg-amber-100">
      </div>

      <div id="footer" className="pt-5 h-25 flex justify-end bg-blue-200">
        <hr className="absolute left-1/2 -translate-x-1/2 w-[75%]"></hr>
        <p className="absolute mt-3 pr-[13%] text-sm text-[#1A274B]">
          © 2025 <a href="https://github.com/kyurijung/kyurijung.github.io" className="underline">kyurijung.github.io</a> by Kyuri Jung
        </p>
      </div>
    </div>
  );
}

export default Home;
