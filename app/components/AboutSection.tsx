import Image, { StaticImageData } from "next/image";
import { activities } from "../utilities/activitiesData";
import { Skills } from "./commonComponents";

interface ActivityCardProps {
  title: string;
  logo: StaticImageData;
  description: string;
  tags: string[];
}

const AboutSection = () => {
  return (
    <div>
      <Heading />
      <Activities />
    </div>
  );
};

export default AboutSection;

const Heading = () => {
  return (
    <div>
      <p className="text-white mb-4">A LITTLE BIT MORE ABOUT ME</p>
      <h1 className="text-3xl text-white font-bold tracking-tight md:text-5xl">
        Beyond the Code.
      </h1>
      <p className="mt-4 text-xl text-neutral-400 md:text-2xl">
        Things I&apos;ve learned, accomplished, written, and enjoyed along the
        way.
      </p>
    </div>
  );
};

const Activities = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      {activities.map((detail) => {
        return <ActivityCard key={detail.title} detail={detail} />;
      })}

      <p
        className="bg-gradient-to-r from-indigo-400 via-green-500 
        to-orange-400 bg-clip-text text-transparent text-4xl font-bold self-center"
      >
        There is more to come...
      </p>
    </div>
  );
};

const ActivityCard = ({ detail }: { detail: ActivityCardProps }) => {
  return (
    <div className="project-card flex flex-col flex-wrap p-4 rounded-3xl ">
      <Image
        src={detail.logo}
        alt={detail.title}
        className="rounded-3xl w-[300px]"
      />
      <p className="text-lg md:text-lg font-bold text-white mt-3">
        {detail.title}
      </p>
      <p className="text-white">{detail.description}</p>
      <Skills skills={detail.tags} />
    </div>
  );
};
