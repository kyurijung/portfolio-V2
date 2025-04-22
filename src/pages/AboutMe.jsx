import data from "/src/data/about-me";

function AboutMe() {
  return (
    <div id="about" className="scroll-mt-18 bg-amber-100 pt-9 pb-13">
      <div className="">
        <h2 className="ml-40 leading-none text-[40px] font-bold text-[#1A274B]">00. about me</h2>
        <div className="flex flex-row ml-48 mt-13 w-225 items-center justify-between">
          <div className="w-120">
            <text className="text-[#1A274B] text-[18px]">
              Back in 2019, I stumbled upon a UI design workshop as a curious graphic designer and fell into the fascinating world of web development.
              Fast-forward to today, I'm in my 4th year of a Computer Science degree at Carleton University and had the privilege of interning at Warner
              Bros. Discovery and Canada Energy Regulator. My interests have gravitated towards API and backend development, as reflected in my rewarding
              personal projects.
              <br />
              <br />
              Beyond coding, I'm a culinary adventurer, avid podcast listener, and aspiring guitarist. Read more about my tech journey below, connect with
              me on LinkedIn, or check out my projects on GitHub :)
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
