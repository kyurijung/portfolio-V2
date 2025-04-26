import data from "/src/data/experience";

import ExperienceBlock from "/src/components/experience/ExperienceBlock";

function Experience() {
  return (
    <div id="experience" className="scroll-mt-18 pt-10 pb-10">
      <h2 className="ml-40 mb-10 text-[40px] font-bold text-primary leading-none">{data.sectionName}</h2>

      <section className="ml-48 space-y-10">
        {data.experiences.map((experience, index) => (
          <ExperienceBlock
            key={index}
            company={experience.company}
            url={experience.url}
            roles={experience.roles}
          />
        ))}
      </section>
    </div>
  );
}

export default Experience;
