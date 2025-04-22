import data from "/src/data/experience";

function Experience() {
  return (
    <div id="experience" className="scroll-mt-18 bg-blue-200 pt-9 pb-9">
      <div className="">
        <h2 className="ml-40 leading-none text-[40px] font-bold text-primary">01. experience</h2>
        <div>
          <div className="ml-48 mt-7">
            {/* Experience 1 */}
            <h2 className="text-[25px] font-bold text-primary">{data.experience[0].company}</h2>
            <div className="flex w-225 items-baseline justify-between">
              <h3 className="text-[20px] font-bold text-secondary">Software Developer I</h3>
              <h3 className="text-[18px] font-medium text-primary">January 2024 - Present</h3>
            </div>
            <ul className="list-disc ml-4 mt-2 space-y-1 pl-5">
              <li className="text-primary mr-73 text-[16px]">
                Optimized HBO Max app's accessibility and player controls by developing and refactoring the You.i One Engine's
                React Native and Swift API, boosting stability and performance by 30%
              </li>
              <li className="text-primary mr-73 text-[16px]">
                Automated acceptance testing prior to product deployment by implementing integration and unit tests, effectively
                reducing 40% of manual testing
              </li>
              <li className="text-primary mr-73 text-[16px]">
                Published documentation about new or upgraded features with specifications and guidelines, for 600+ engineers to
                reference during future development
              </li>
            </ul>
            {/* Experience 2 */}
            <div className="flex w-225 items-baseline justify-between">
              <h3 className="text-[20px] font-bold text-secondary">Software Developer</h3>
              <h3 className="text-[18px] font-medium text-primary">May 2022 - August 2022</h3>
            </div>
            <ul className="list-disc ml-4 mt-2 space-y-1 pl-5">
              <li className="text-primary mr-73 text-[16px]">
                Optimized HBO Max app's accessibility and player controls by developing and refactoring the You.i One Engine's
                React Native and Swift API, boosting stability and performance by 30%
              </li>
              <li className="text-primary mr-73 text-[16px]">
                Automated acceptance testing prior to product deployment by implementing integration and unit tests, effectively
                reducing 40% of manual testing
              </li>
              <li className="text-primary mr-73 text-[16px]">
                Published documentation about new or upgraded features with specifications and guidelines, for 600+ engineers to
                reference during future development
              </li>
            </ul>
          </div>
        </div>
        <div>
          {/* Experience 3 */}
          <div className="ml-48 mt-7">
            <h2 className="text-[25px] font-bold text-primary">Canada Energy Regulator</h2>
            <div className="flex w-225 items-baseline justify-between">
              <h3 className="text-[20px] font-bold text-secondary">Web Content Developer</h3>
              <h3 className="text-[18px] font-medium text-primary">January 2021 - April 2021</h3>
            </div>
            <ul className="list-disc ml-4 mt-2 space-y-1 pl-5">
              <li className="text-primary mr-73 text-[16px]">
                Customized client-side web parts and their layouts for the organization's intranet by using SPFx, CSS, and
                third-party widgets, increasing site engagement for 200+ employees
              </li>
              <li className="text-primary mr-73 text-[16px]">
                Migrated content from the former site onto the renewed SharePoint platform by sorting and filtering relevant
                subjects, expediting transfer speeds by 2x
              </li>
              <li className="text-primary mr-73 text-[16px]">
                Hosted live tutorial sessions demonstrating the creating and editing of site pages, training 30+ web editors
                to adopt the new platform
              </li>
            </ul>
          </div>
        </div>
        <div>
          {/* Experience 4 */}
          <div className="ml-48 mt-7">
            <h2 className="text-[25px] font-bold text-primary">Google Developer Student Club</h2>
            <div className="flex w-225 items-baseline justify-between">
              <h3 className="text-[20px] font-bold text-secondary">Lead Designer</h3>
              <h3 className="text-[18px] font-medium text-primary">September 2021 - April 2022</h3>
            </div>
            <ul className="list-disc ml-4 mt-2 space-y-1 pl-5">
              <li className="text-primary mr-73 text-[16px]">
                Produced graphics adhering to GDSC's brand theme by using Photoshop and Canva to generate templates and posts
                for social media, targeting students interested in tech
              </li>
            </ul>
          </div>
        </div>
        <div>
          {/* Experience 5 */}
          <div className="ml-48 mt-7">
            <h2 className="text-[25px] font-bold text-primary">Technolgap</h2>
            <div className="flex w-225 items-baseline justify-between">
              <h3 className="text-[20px] font-bold text-secondary">Student Mentor</h3>
              <h3 className="text-[18px] font-medium text-primary">August 2020 - April 2021</h3>
            </div>
            <ul className="list-disc ml-4 mt-2 space-y-1 pl-5">
              <li className="text-primary mr-73 text-[16px]">
                Mentored incoming women in Computer Science with supportive tutoring and valuable career insights, guiding them
                through a successful first year in the program
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
