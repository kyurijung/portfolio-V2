import data from "/src/data/about-me";

import ImageOutline from "/src/components/home/ImageOutline";

function AboutMe() {
  return (
    <div id="about" className="scroll-mt-18 pt-10 pb-15">
      <h2 className="ml-40 mb-7 text-[40px] font-bold text-primary leading-none">{data.sectionName}</h2>

      <div className="ml-48 flex items-center justify-between w-225">
        <div className="w-120">
          <text className="text-[18px] text-primary">
            {data.career}
            <br />
            <br />
            {data.hobbies}
          </text>
        </div>
        <ImageOutline imageName={data.imageName} width={19} />
      </div>
    </div>
  );
}

export default AboutMe;
