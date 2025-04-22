import data from "/src/data/about-me";

function AboutMe() {
  return (
    <div id="about" className="scroll-mt-18 bg-amber-100 pt-9 pb-13">
      <div className="">
        <h2 className="ml-40 leading-none text-[40px] font-bold text-[#1A274B]">{data.heading}</h2>
        <div className="flex flex-row ml-48 mt-13 w-225 items-center justify-between">
          <div className="w-120">
            <text className="text-[#1A274B] text-[18px]">
              {data.career}
              <br />
              <br />
              {data.hobbies}
            </text>
          </div>
          <div className="overflow-visible w-fit">
            <div className="border-4 border-[#1A274B] w-75 h-fit -mr-3 -mb-3">
              <img
                className="w-full relative right-3 bottom-3"
                src="/src/assets/images/portrait.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
