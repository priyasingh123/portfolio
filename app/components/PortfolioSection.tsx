


const PortfolioSection = ({ id, classes, children }: 
    { classes: string[]; children: React.ReactNode, id: string }) => {
    return (
        <section id={id} className={["min-h-screen", "px-[10%]", 
            "py-[80px]", "flex", "flex-col", "justify-center", ...classes]
            .join(' ')}>
            {children}
        </section>
    )
}

export default PortfolioSection;