export default function SubsectionTitle({text}) {
    return (
        <div className="flex gap-2 mb-6 h-fit">
            <span className="mark-yellow"></span>
            <h3>{text}</h3>
        </div>
    )
}
