import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-16 md:py-20 px-4 sm:px-6 md:px-10 z-20 w-full scroll-mt-20"
    >
      <h1 className="text-[32px] sm:text-[38px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-12 text-center">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-row flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
};
