import data from "/src/data/home";

import ScrollIcon from "/src/components/home/ScrollIcon";

function Home() {
  const home = data.home

  return (
    <div className="h-screen pt-[18%]">
      <div className="leading-none">
        <h1 className="ml-[8%] text-[25px] font-mono font-bold text-primary">{home.greeting}</h1>
        <h1 className="ml-[7.5%] text-[130px] font-extrabold text-primary">{home.name}</h1>
        <h1 className="ml-[8%] mt-6 text-[30px] font-normal text-secondary">{home.title}</h1>
      </div>
      <ScrollIcon />
    </div>
  );
}

export default Home;
