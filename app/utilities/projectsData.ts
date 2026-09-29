import habitTracker from "../../assets/img/habit-tracker.png";
import countryDisplay from "../../assets/img/country-display.png";
import socialFeed from "../../assets/img/social-feed.png";
import movieflix from "../../assets/img/movieflix.png";

export const projects = [
  {
    title: "Habit Tracker",
    logo: habitTracker,
    description:
      "A productivity-focused application to track daily habits and monitor progress over time.",
    tech: [
      "ReactJS",
      "JavaScript",
      "HTML",
      "CSS",
      "MongoDB",
      "NodeJS",
      "ExpressJS",
      "Docker",
      "Playwright",
      "LLM API Integration",
    ],
  },
  {
    title: "Movieflix",
    logo: movieflix,
    description:
      "A responsive React-based movie catalog featuring infinite scroll and genre filtering.",
    tech: ["ReactJs", "React-Virtuoso", "CSS", "HTML"],
  },
  {
    title: "Social Feed",
    logo: socialFeed,
    description:
      "Full-stack social media application with user authentication and real-time interactions",
    tech: [
      "MongoDB",
      "ReactJs",
      "Node.js",
      "Express.js",
      "JWT",
      "CSS",
      "HTML",
      "Server Sent Events",
    ],
  },
  {
    title: "Country Display",
    logo: countryDisplay,
    description:
      "Interactive country search application with debounced search and detailed country information.",
    tech: ["ReactJs", "TypeScript", "HTML", "CSS", "REST API"],
  },
];
