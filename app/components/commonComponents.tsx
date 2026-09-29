interface SkillsProps {
  skills: string[];
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((tech, index) => {
        return (
          <div
            className="shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] 
            p-2 rounded-3xl
            flex-wrap"
            key={`${tech}-${index}`}
          >
            <p className="text-sm md:text-base text-white">{tech}</p>
          </div>
        );
      })}
    </div>
  );
};
