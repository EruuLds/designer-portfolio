export default function IconsBundleCard({ children, label }) {
    return (
        <div className="panel-a grid gap-2">
            {label && <h4 className="ms-3 my-1">{label}</h4>}
            <div className="panel-b">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(4.5rem,1fr))] gap-3">
                    {children}
                </div>
            </div>
        </div>
    );
}
