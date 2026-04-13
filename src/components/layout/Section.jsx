export default function Section({ children, heading, id, customClass}) {
    return (
        <section id={id} className={`responsive-container scroll-mt-[12rem] sm:scroll-mt-[6rem] pb-16 ${customClass ?? undefined}`} >
            {heading &&
                <div className="flex gap-2 mb-8 h-fit">
                    <span className="mark-magenta"></span>
                    <h2>{heading}</h2>
                </div>}
            {children}
        </section>
    );
}
