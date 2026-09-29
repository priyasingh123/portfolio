import Image from "next/image";
import { Skills } from "./commonComponents";
import { experiences } from "../utilities/experienceData";

const ExperienceSection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <ExpHeading />
      <Experience experiences={experiences} />
    </div>
  );
};

export default ExperienceSection;

const ExpHeading = () => {
  return (
    <div className="flex flex-col flex-[2]">
      <p className="mb-4 text-white">EXPERIENCE</p>
      <h1 className="text-3xl text-white font-bold tracking-tight md:text-5xl">
        Where I&apos;ve worked
      </h1>
      <p className="mt-4 text-xl text-neutral-400 md:text-2xl">
        Building user interfaces, solving engineering problems, and working with
        modern frontend technologies.
      </p>
    </div>
  );
};

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  summary: string;
  logo: string;
  logoStyle: string;
  technologies: string[];
}

const Experience = ({
  experiences,
}: {
  experiences: ExperienceCardProps[];
}) => {
  return (
    <div className="flex-[2] align">
      {experiences.map((exp, index) => (
        <ExperienceCard
          key={index}
          title={exp.title}
          logoStyle={exp.logoStyle}
          logo={exp.logo}
          company={exp.company}
          duration={exp.duration}
          summary={exp.summary}
          technologies={exp.technologies}
        />
      ))}
    </div>
  );
};

const ExperienceCard = ({
  logo,
  logoStyle,
  title,
  company,
  duration,
  technologies,
}: ExperienceCardProps) => {
  return (
    <div className="exp-card flex p-4 m-4">
      <div className="relative w-[100px] h-[100px] overflow-hidden m-2 md:shrink-0 rounded-3xl">
        <Image
          src={logo}
          alt={company}
          width={80}
          height={80}
          className={logoStyle}
        />
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm md:text-lg font-semibold">{title}</p>
          <p className="text-sm md:text-lg">{duration}</p>
        </div>
        <p className="text-sm md:text-lg">{company}</p>
        <Skills skills={technologies} />
      </div>
    </div>
  );
};
