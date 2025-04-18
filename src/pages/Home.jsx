import ScrollIcon from "/src/components/ScrollIcon";

function Home() {
  return (
    <div className="ml-25 mt-18 flex flex-col">
      <div id="titleSection" className="h-[calc(100vh-72px)] bg-blue-200">
        <div className="pt-60">
          <h1 className="ml-20 leading-none text-[25px] font-mono font-bold text-[#1A274B]">Hi, my name is</h1>
          <h1 className="ml-18 leading-none text-[130px] font-extrabold text-[#1A274B]">Kyuri Jung.</h1>
          <h1 className="ml-20 mt-6 leading-none text-[30px] font-normal text-[#A94D0F]">Full-Stack Developer & Designer</h1>
        </div>
        <ScrollIcon />
      </div>

      <div id="about" className="h-[calc(100vh-72px)] scroll-mt-18 bg-amber-100">
        <div className="">
          <h2 className="ml-40 mt-9 leading-none text-[40px] font-bold text-[#1A274B]">00. about me</h2>
        </div>
      </div>

      <div id="experience" className="h-[calc(100vh-72px)] scroll-mt-18 bg-blue-200">
      </div>

      <div id="projects" className="h-[calc(100vh-72px)] scroll-mt-18 bg-amber-100">
        <div className="">
            <h2 className="ml-40 mt-9 leading-none text-[40px] font-bold text-[#1A274B]">02. projects</h2>
        </div>
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
