import Image from "next/image";
import IntuitLogo from "../../assets/intuit-svg.svg";
import UBSLogo from "../../assets/UBS-svg.svg";

const experiences = [
  {
    title: "Software Engineer 2",
    company: "Intuit",
    duration: "2023-2025",
    logo: IntuitLogo,
    // logoStyle: "absolute max-w-none top-[10%] left-[10%] scale-175 rounded-3xl",
    logoStyle: "",
    summary:
      "Worked on developing and maintaining web applications using React and Node.js.",
    technologies: [
      "React",
      "Redux",
      "Playwright",
      "Java",
      "TypeScript",
      "Zustand",
      "NodeJS",
    ],
  },
  {
    title: "Software Engineer",
    company: "UBS",
    duration: "2019-2022",
    logo: UBSLogo,
    logoStyle: "",
    summary:
      "Worked on developing and maintaining web applications using React and Node.js.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Mobx", "Jest"],
  },
];

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
  summary,
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
        <Skills technologies={technologies} />
      </div>
    </div>
  );
};

const Skills = ({
  technologies,
}: {
  technologies: ExperienceCardProps["technologies"];
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => {
        return (
          <div
            className="shadow-[inset_0_0_10px_rgba(0,0,0,0.3)] text-sm md:text-lg px-3 rounded-3xl 
            bg-[linear-gradient(135deg,_#4f46e5_0%,_#7c3aed_100%)] flex-wrap"
            key={`${tech}-${index}`}
          >
            <p>{tech}</p>
          </div>
        );
      })}
    </div>
  );
};
