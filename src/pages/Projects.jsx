import data from "/src/data/projects";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from "@fortawesome/free-solid-svg-icons"

function Projects() {
  return (
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
  );
}

export default Projects;
