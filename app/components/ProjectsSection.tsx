import Image, { StaticImageData } from "next/image";
import { projects } from "../utilities/projectsData";
import { Skills } from "./commonComponents";
import externalLink from "../../assets/logos/external-link.svg";

interface ProjectCardProps {
  title: string;
  logo: StaticImageData;
  description: string;
  demo_link: string;
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
      <p className="text-white mb-4">PROJECTS</p>
      <h1 className="text-3xl text-white font-bold tracking-tight md:text-5xl">
        Projects I&apos;ve built
      </h1>
      <p className="mt-4 text-xl text-neutral-400 md:text-2xl">
        A few things I&apos;ve designed, developed and shipped.
      </p>
    </div>
  );
};

const Projects = ({
  projectsDetails,
}: {
  projectsDetails: ProjectCardProps[];
}) => {
  return (
    <div className="flex gap-4 flex-wrap">
      {projectsDetails.map((detail) => {
        return <ProjectCard key={detail.title} detail={detail} />;
      })}
    </div>
  );
};

const ProjectCard = ({ detail }: { detail: ProjectCardProps }) => {
  return (
    <div className="project-card flex flex-col flex-wrap p-4 w-[530px] rounded-3xl ">
      <Image
        src={detail.logo}
        alt={detail.title}
        className="w-[530px] h-auto object-contain rounded-3xl"
      />
      <p className="text-lg md:text-lg font-bold text-white mt-3">
        {detail.title}
      </p>
      <p className="text-white">{detail.description}</p>
      <Skills skills={detail.tech} />
      <a
        className="active:translate-y-1 self-center inline-flex mt-auto p-1 
      border border-amber-50 rounded-3xl gap-2 items-center cursor-pointer"
        href={detail.demo_link}
        target="_blank"
      >
        <Image
          src={externalLink}
          alt="live demo"
          width={20}
          height={20}
          className="text-white"
        />
        <p className="text-white">Live Demo</p>
      </a>
    </div>
  );
};
