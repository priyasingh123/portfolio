import PortfolioSection from "./components/PortfolioSection";

export default function Home() {
  return (
    <main>
      <PortfolioSection
        id="hero"
        classes={["hero", "bg-neutral-950", "text-white"]}
      >
        <p className="mt-4 text-xl text-neutral-400 md:text-2xl">Hi, I am </p>
        <h1 className="text-5xl text-white font-bold tracking-tight md:text-7xl">
          Priya Singh
        </h1>
        <p className="mt-4 text-xl text-neutral-400 md:text-2xl">
          Software Engineer
        </p>
        <div className="flex items-center gap-2 text-neutral-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <span className="text-xl text-neutral-400 md:text-2xl">
            NCR, India
          </span>
        </div>
      </PortfolioSection>
      <PortfolioSection id="about" classes={["about"]}>
        <h2>About Me</h2>
        <p>
          I&apos;m a passionate software engineer with experience in creating
          responsive and user-friendly web applications.
        </p>
      </PortfolioSection>
      <PortfolioSection id="experience" classes={["experience"]}>
        <h2>Experience</h2>
        <p>Here&apos;s a brief overview of my professional experience.</p>
      </PortfolioSection>
      <PortfolioSection id="projects" classes={["projects"]}>
        <h2>Projects</h2>
        <p>Check out some of the projects I&apos;ve worked on.</p>
      </PortfolioSection>
      <PortfolioSection id="skills" classes={["skills"]}>
        <h2>Skills</h2>
        <p>Here are some of the skills I&apos;ve developed.</p>
      </PortfolioSection>
      <PortfolioSection id="contact" classes={["contact"]}>
        <h2>Contact</h2>
        <p>Feel free to reach out if you&apos;d like to get in touch!</p>
      </PortfolioSection>
    </main>
  );
}
