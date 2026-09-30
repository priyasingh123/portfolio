const ContactSection = () => {
  return (
    <div>
      <Heading />
      <ContactLinks />
    </div>
  );
};

export default ContactSection;

const Heading = () => {
  return (
    <div>
      <p className="mb-4 text-white">LET&apos;S CONNECT</p>

      <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
        Get in Touch.
      </h1>

      <p className="mt-4 text-xl text-neutral-400 md:text-2xl">
        Have an opportunity or just want to say hello? I&apos;d love to hear
        from you.
      </p>
    </div>
  );
};

const ContactLinks = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/priyasingh777"
        target="_blank"
        rel="noopener noreferrer"
        className="project-card group flex items-center gap-4 rounded-2xl p-5
          transition-transform duration-150 hover:-translate-y-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="shrink-0 text-white"
          aria-hidden="true"
        >
          <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8 19H5V9h3ZM6.5 7.7a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-4.87c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.27-1.87 2.57V19h-3V9h2.88v1.37h.04a3.16 3.16 0 0 1 2.84-1.56c3.04 0 3.6 2 3.6 4.6Z" />
        </svg>

        <div>
          <p className="text-lg font-bold text-white">LinkedIn</p>
          <p className="text-sm text-white-400">
            Connect with me professionally
          </p>
        </div>

        <span className="ml-2 text-white-400 transition-colors group-hover:text-white">
          ↗
        </span>
      </a>

      {/* Email */}
      <a
        href="mailto:priyaasinghh345@gmail.com"
        className="project-card group flex items-center gap-4 rounded-2xl p-5
          transition-transform duration-150 hover:-translate-y-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 text-white"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>

        <div>
          <p className="text-lg font-bold text-white">Email</p>
          <p className="text-sm text-white-400">Drop me a message</p>
        </div>

        <span className="ml-2 text-white-400 transition-colors group-hover:text-white">
          ↗
        </span>
      </a>
    </div>
  );
};
