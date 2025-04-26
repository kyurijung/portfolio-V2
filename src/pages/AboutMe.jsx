import data from "/src/data/about-me";

import ImageOutline from "/src/components/home/ImageOutline";

function AboutMe() {
  return (
    <div id="about" className="scroll-mt-18 bg-amber-100 pt-9 pb-13">
      <div className="">
        <h2 className="ml-40 leading-none text-[40px] font-bold text-primary">{data.heading}</h2>
        <div className="flex flex-row ml-48 mt-13 w-225 items-center justify-between">
          <div className="w-120">
            <text className="text-primary text-[18px]">
              {data.career}
              <br />
              <br />
              {data.hobbies}
            </text>
          </div>
          <ImageOutline imageName="Portrait" width={19} />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
