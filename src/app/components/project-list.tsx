import { Project } from "../../types/project";
import { ProjectCard } from "./project-card";

const getProjects = async () => {
  const res = await fetch(
    "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/tech/frontend-code-challenge/projects_sample.json"
  );

  if (!res) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const ProjectList: React.FC = async () => {
  const projects: Project[] = await getProjects();

  return (
    <section className="flex flex-row flex-wrap">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectList;
