import data from "/src/data/projects";

import ProjectBlock from "/src/components/projects/ProjectBlock";

function Projects() {
  return (
    <div id="projects" className="scroll-mt-18 pt-10 pb-15">
      <h2 className="ml-40 mb-15 text-[40px] font-bold text-primary leading-none">{data.sectionName}</h2>

      <section className="ml-52 space-y-15">
        {data.projects.map((project, index) => (
          <ProjectBlock
            key={index}
            imageName={project.imageName}
            width={project.imageWidth}
            title={project.title}
            repoUrl={project.url}
            techStack={project.tech}
            description={project.description}
          />
        ))}
      </section>
    </div>
  );
}

export default Projects;
