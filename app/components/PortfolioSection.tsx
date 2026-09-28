const PortfolioSection = ({
  id,
  classes,
  children,
}: {
  classes: string[];
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <section
      id={id}
      className={[
        "min-h-screen",
        "px-[10%]",
        "py-[80px]",
        "flex",
        "flex-col",
        "justify-center",
        "relative",
        ...classes,
      ].join(" ")}
    >
      {/* <header className="flex justify-between absolute top-3 px-[10%] inset-x-0">
        <p>PRIYA SINGH / PORTFOLIO</p>
        <p>2026</p>
      </header> */}
      {children}
      {/* <footer className="absolute bottom-3 right-[10%] flex">
        <p>Scroll to explore</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </footer> */}
    </section>
  );
};

export default PortfolioSection;
