import technologies from "../../data/technologies.json" with { type: "json" };

export default function LabeledIcon({ id }) {
    return (
        <div className="@max-md:aspect-square h-fit flex flex-col justify-center items-center select-none">
            <img className="h-[3rem] aspect-square mb-1 object-contain" src={technologies[id].icon} alt={technologies[id].label} />
            <p className="text-sm text-center">{technologies[id].label}</p>
        </div>
    );
}
