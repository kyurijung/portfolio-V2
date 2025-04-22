import ScrollIcon from "/src/components/ScrollIcon";

function Home() {
  return (
    <div id="titleSection" className="h-screen">
      <div className="mt-[18%]">
        <h1 className="ml-[8%] leading-none text-[25px] font-mono font-bold text-[#1A274B]">Hi, my name is</h1>
        <h1 className="ml-[7.5%] leading-none text-[130px] font-extrabold text-[#1A274B]">Kyuri Jung.</h1>
        <h1 className="ml-[8%] mt-6 leading-none text-[30px] font-normal text-[#A94D0F]">Full-Stack Developer & Designer</h1>
      </div>
      <ScrollIcon />
    </div>
  );
}

export default Home;
