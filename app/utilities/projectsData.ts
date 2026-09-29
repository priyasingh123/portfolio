import habitTracker from "../../assets/img/habit-tracker.png";
import countryDisplay from "../../assets/img/country-display.png";
import socialFeed from "../../assets/img/social-feed.png";
import movieflix from "../../assets/img/movieflix.png";

export const projects = [
  {
    title: "Habit Tracker",
    logo: habitTracker,
    demo_link: "https://priyasingh123.github.io/habit-app/",
    description:
      "A productivity-focused application to track daily habits and monitor progress over time.",
    tech: [
      "ReactJS",
      "JavaScript",
      "MongoDB",
      "NodeJS",
      "ExpressJS",
      "Docker",
      "Playwright",
    ],
  },
  {
    title: "Movieflix",
    demo_link: "https://priyasingh123.github.io/movieflix/",
    logo: movieflix,
    description:
      "A responsive React-based movie catalog featuring infinite scroll and genre filtering.",
    tech: ["ReactJs", "React-Virtuoso", "HTML", "CSS"],
  },
  {
    title: "Social Feed",
    logo: socialFeed,
    demo_link: "https://twitter-frontend-cby9.onrender.com/",
    description:
      "Full-stack social media application with user authentication and real-time interactions",
    tech: [
      "MongoDB",
      "ReactJs",
      "Node.js",
      "Express.js",
      "JWT",
      "Server Sent Events",
    ],
  },
  {
    title: "Country Display",
    logo: countryDisplay,
    demo_link:
      "https://priyasingh123.github.io/country-display/#/country-display",
    description:
      "Interactive country search application with debounced search and detailed country information.",
    tech: ["ReactJs", "TypeScript", "HTML", "CSS", "REST API"],
  },
];
