import data from "/src/data/home";

import ScrollIcon from "/src/components/ScrollIcon";

function Home() {
  const home = data.home

  return (
    <div className="h-screen">
      <div className="mt-[18%] leading-none">
        <h1 className="ml-[8%] text-[25px] font-mono font-bold text-[#1A274B]">{home.greeting}</h1>
        <h1 className="ml-[7.5%] text-[130px] font-extrabold text-[#1A274B]">{home.name}</h1>
        <h1 className="ml-[8%] mt-6 text-[30px] font-normal text-[#A94D0F]">{home.title}</h1>
      </div>
      <ScrollIcon />
    </div>
  );
}

export default Home;
