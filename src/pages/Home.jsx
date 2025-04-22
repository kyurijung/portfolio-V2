import ScrollIcon from "/src/components/ScrollIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from "@fortawesome/free-solid-svg-icons"

function Home() {
  return (
    <div className="ml-25 mt-18 flex flex-col">
      <div id="titleSection" className="h-screen">
        <div className="mt-[18%]">
          <h1 className="ml-[8%] leading-none text-[25px] font-mono font-bold text-[#1A274B]">Hi, my name is</h1>
          <h1 className="ml-[7.5%] leading-none text-[130px] font-extrabold text-[#1A274B]">Kyuri Jung.</h1>
          <h1 className="ml-[8%] mt-6 leading-none text-[30px] font-normal text-[#A94D0F]">Full-Stack Developer & Designer</h1>
        </div>
        <ScrollIcon />
      </div>

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

      <div id="experience" className="scroll-mt-18 bg-blue-200 pt-9 pb-9">
        <div className="">
          <h2 className="ml-40 leading-none text-[40px] font-bold text-[#1A274B]">01. experience</h2>
          <div>
            <div className="ml-48 mt-7">
              {/* Experience 1 */}
              <h2 className="text-[25px] font-bold text-[#1A274B]">Warner Bros. Discovery</h2>
              <div className="flex w-225 items-baseline justify-between">
                <h3 className="text-[20px] font-bold text-[#A94D0F]">Software Developer I</h3>
                <h3 className="text-[18px] font-medium text-[#1A274B]">January 2024 - Present</h3>
              </div>
              <ul className="list-disc ml-4 mt-2 space-y-1 pl-5">
                <li className="text-[#1A274B] mr-73 text-[16px]">
                  Optimized HBO Max app's accessibility and player controls by developing and refactoring the You.i One Engine's 
                  React Native and Swift API, boosting stability and performance by 30%
                </li>
                <li className="text-[#1A274B] mr-73 text-[16px]">
                  Automated acceptance testing prior to product deployment by implementing integration and unit tests, effectively 
                  reducing 40% of manual testing
                </li>
                <li className="text-[#1A274B] mr-73 text-[16px]">
                  Published documentation about new or upgraded features with specifications and guidelines, for 600+ engineers to 
                  reference during future development
                </li>
              </ul>
              {/* Experience 2 */}
              <div className="flex w-225 items-baseline justify-between">
                <h3 className="text-[20px] font-bold text-[#A94D0F]">Software Developer</h3>
                <h3 className="text-[18px] font-medium text-[#1A274B]">May 2022 - August 2022</h3>
              </div>
              <ul className="list-disc ml-4 mt-2 space-y-1 pl-5">
                <li className="text-[#1A274B] mr-73 text-[16px]">
                  Optimized HBO Max app's accessibility and player controls by developing and refactoring the You.i One Engine's 
                  React Native and Swift API, boosting stability and performance by 30%
                </li>
                <li className="text-[#1A274B] mr-73 text-[16px]">
                  Automated acceptance testing prior to product deployment by implementing integration and unit tests, effectively 
                  reducing 40% of manual testing
                </li>
                <li className="text-[#1A274B] mr-73 text-[16px]">
                  Published documentation about new or upgraded features with specifications and guidelines, for 600+ engineers to 
                  reference during future development
                </li>
              </ul>
            </div>
          </div>
          <div>
            {/* Experience 3 */}
            <div className="ml-48 mt-7">
              <h2 className="text-[25px] font-bold text-[#1A274B]">Canada Energy Regulator</h2>
              <div className="flex w-225 items-baseline justify-between">
                <h3 className="text-[20px] font-bold text-[#A94D0F]">Web Content Developer</h3>
                <h3 className="text-[18px] font-medium text-[#1A274B]">January 2021 - April 2021</h3>
              </div>
              <ul className="list-disc ml-4 mt-2 space-y-1 pl-5">
                <li className="text-[#1A274B] mr-73 text-[16px]">
                  Customized client-side web parts and their layouts for the organization's intranet by using SPFx, CSS, and 
                  third-party widgets, increasing site engagement for 200+ employees
                </li>
                <li className="text-[#1A274B] mr-73 text-[16px]">
                  Migrated content from the former site onto the renewed SharePoint platform by sorting and filtering relevant 
                  subjects, expediting transfer speeds by 2x
                </li>
                <li className="text-[#1A274B] mr-73 text-[16px]">
                  Hosted live tutorial sessions demonstrating the creating and editing of site pages, training 30+ web editors 
                  to adopt the new platform
                </li>
              </ul>
            </div>
          </div>
          <div>
            {/* Experience 4 */}
            <div className="ml-48 mt-7">
              <h2 className="text-[25px] font-bold text-[#1A274B]">Google Developer Student Club</h2>
              <div className="flex w-225 items-baseline justify-between">
                <h3 className="text-[20px] font-bold text-[#A94D0F]">Lead Designer</h3>
                <h3 className="text-[18px] font-medium text-[#1A274B]">September 2021 - April 2022</h3>
              </div>
              <ul className="list-disc ml-4 mt-2 space-y-1 pl-5">
                <li className="text-[#1A274B] mr-73 text-[16px]">
                  Produced graphics adhering to GDSC's brand theme by using Photoshop and Canva to generate templates and posts 
                  for social media, targeting students interested in tech
                </li>
              </ul>
            </div>
          </div>
          <div>
            {/* Experience 5 */}
            <div className="ml-48 mt-7">
              <h2 className="text-[25px] font-bold text-[#1A274B]">Technolgap</h2>
              <div className="flex w-225 items-baseline justify-between">
                <h3 className="text-[20px] font-bold text-[#A94D0F]">Student Mentor</h3>
                <h3 className="text-[18px] font-medium text-[#1A274B]">August 2020 - April 2021</h3>
              </div>
              <ul className="list-disc ml-4 mt-2 space-y-1 pl-5">
                <li className="text-[#1A274B] mr-73 text-[16px]">
                  Mentored incoming women in Computer Science with supportive tutoring and valuable career insights, guiding them 
                  through a successful first year in the program
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="projects" className="scroll-mt-18 bg-amber-100 pt-9 pb-13">
        <div className="">
            <h2 className="ml-40 leading-none text-[40px] font-bold text-[#1A274B]">02. projects</h2>

            {/* Project 1 */}
            <div className="flex flex-row ml-48 mt-13 w-225 items-center justify-between">
              <div className="overflow-visible w-fit">
                <div className="border-4 border-[#1A274B] w-55 h-fit -mr-3 -mb-3">
                  <img 
                    className="w-full relative right-3 bottom-3" 
                    src="/src/assets/images/project1.png" 
                  />
                </div>
              </div>
              <div className="w-120">
                <a href="https://github.com/kyurijung/heartwave" className="flex items-center gap-2 text-[#1A274B] hover:text-[#A94D0F] transition">
                  <h2 className="text-[25px] font-bold">HeartWave</h2>
                  <FontAwesomeIcon 
                    icon={faLink} 
                    size="lg"
                  />
                </a>
                <div className="flex flex-wrap gap-2 text-[20px] font-bold text-[#A94D0F]">
                  <span>C++</span> • <span>Qt</span> • <span>SQL</span> • <span>Qt Creator</span>
                </div>
                <ul className="list-disc ml-4 mt-2 space-y-1 pl-5">
                  <li className="text-[#1A274B] text-[16px]">
                    Developed a heart rate monitor software with Qt and SQL, integrating real-time biofeedback to measure, analyze, and display elaborate heart rate variability patterns
                  </li>
                </ul>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-row ml-48 mt-13 w-225 items-center justify-between">
              <div className="overflow-visible w-fit">
                <div className="border-4 border-[#1A274B] w-85 h-fit -mr-3 -mb-3">
                  <img 
                    className="w-full relative right-3 bottom-3" 
                    src="/src/assets/images/project2.png" 
                  />
                </div>
              </div>
              <div className="w-120">
                <a href="https://github.com/kyurijung/orderup" className="flex items-center gap-2 text-[#1A274B] hover:text-[#A94D0F] transition">
                  <h2 className="text-[25px] font-bold">OrderUp</h2>
                  <FontAwesomeIcon 
                    icon={faLink} 
                    size="lg"
                  />
                </a>
                <div className="flex flex-wrap gap-2 text-[20px] font-bold text-[#A94D0F]">
                  <span>JavaScript</span> • <span>Node.js</span> • <span>HTML/CSS</span> • <span>MongoDB</span>
                </div>
                <ul className="list-disc ml-4 mt-2 space-y-1 pl-5">
                  <li className="text-[#1A274B] text-[16px]">
                    Created a food ordering web app with JavaScript and HTML to execute user logins, display menus, and order items, alongside CSS to enhance UI designs
                  </li>
                </ul>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-row ml-48 mt-13 w-225 items-center justify-between">
              <div className="overflow-visible w-fit">
                <div className="border-4 border-[#1A274B] w-85 h-fit -mr-3 -mb-3">
                  <img 
                    className="w-full relative right-3 bottom-3" 
                    src="/src/assets/images/project3.png" 
                  />
                </div>
              </div>
              <div className="w-120">
                <a href="https://github.com/kyurijung/easycart" className="flex items-center gap-2 text-[#1A274B] hover:text-[#A94D0F] transition">
                  <h2 className="text-[25px] font-bold">EasyCart</h2>
                  <FontAwesomeIcon 
                    icon={faLink}
                    size="lg"
                  />
                </a>
                <div className="flex flex-wrap gap-2 text-[20px] font-bold text-[#A94D0F]">
                  <span>Java</span> • <span>JavaFX</span> • <span>Figma</span>
                </div>
                <ul className="list-disc ml-4 mt-2 space-y-1 pl-5">
                  <li className="text-[#1A274B] text-[16px]">
                    Developed a desktop shopping cart app, using Java and JavaFX to implement menu displays, calculations, and item orders
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>

      <div id="footer" className="pt-5 h-25 flex justify-end">
        <hr className="absolute left-1/2 -translate-x-1/2 w-[75%]"></hr>
        <p className="absolute mt-3 pr-[13%] text-sm text-[#1A274B]">
          © 2025 <a href="https://github.com/kyurijung/kyurijung.github.io" className="underline">kyurijung.github.io</a> by Kyuri Jung
        </p>
      </div>
    </div>
  );
}

export default Home;
