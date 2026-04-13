import technologies from "../../data/technologies.json" with { type: "json" };

export default function Badge({id}) {

    return (
        <span className="badge select-none">
            <img className="h-[1em] aspect-square object-contain me-1" src={technologies[id].icon} alt={technologies[id].label} />
            {technologies[id].label}
        </span>
    );
}
