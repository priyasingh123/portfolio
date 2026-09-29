import Image, { StaticImageData } from "next/image";
import { projects } from "../utilities/projectsData";
import { Skills } from "./commonComponents";

interface ProjectCardProps {
  title: string;
  logo: StaticImageData;
  description: string;
  tech: string[];
}

const ProjectsSection = () => {
  return (
    <div>
      <ProjectsHeading />
      <Projects projectsDetails={projects} />
    </div>
  );
};

export default ProjectsSection;

const ProjectsHeading = () => {
  return (
    <div>
      <p>PROJECTS</p>
      <h1 className="text-3xl text-white font-bold tracking-tight md:text-5xl">
        Projects I&apos;ve built
      </h1>
      <p>A few things I&apos;ve designed, developed and shipped.</p>
    </div>
  );
};

const Projects = ({
  projectsDetails,
}: {
  projectsDetails: ProjectCardProps[];
}) => {
  return (
    <div className="flex gap-4">
      {projectsDetails.map((detail) => {
        return <ProjectCard key={detail.title} detail={detail} />;
      })}
    </div>
  );
};

const ProjectCard = ({ detail }: { detail: ProjectCardProps }) => {
  return (
    <div className="project-card flex flex-col flex-wrap p-4">
      <Image src={detail.logo} className="habit" alt={detail.title} />
      <p className="text-base md:text-lg font-bold">{detail.title}</p>
      <p>{detail.description}</p>
      <Skills skills={detail.tech} />
    </div>
  );
};
