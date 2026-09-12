import type { Technology } from "../types/technology";

interface TechCardProps {
    technology: Technology;
    isAdded: boolean;
    onAdd: (technology: Technology) => void;
}

export default function TechCard({ technology, isAdded, onAdd }: TechCardProps) {
    const { name, category, description, icon, rating, difficulty, badge } = technology;

    return (
        <div className="border border-gray-200 rounded-xl p-5 flex flex-col bg-white hover:shadow-md transition-shadow">


            <div className="flex items-center justify-between mb-3">
                <img src={icon} alt={name} className="w-9 h-9 object-contain" />
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-pink-50 text-pink-600">
                    {badge}
                </span>
            </div>



            <h3 className="text-lg font-bold text-gray-900">{name}</h3>



            <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
                {description}
            </p>



            <div className="mt-4 flex items-center flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600">
                    {category}
                </span>
                <span className="text-gray-500">{difficulty}</span>
                <span className="ml-auto flex items-center gap-1 text-gray-700 font-medium">
                    <span className="text-yellow-400">★</span>
                    {rating}
                </span>
            </div>



            <button
                onClick={() => onAdd(technology)}
                disabled={isAdded}
                className={`mt-4 w-full py-2.5 rounded-lg text-sm font-semibold transition-colors ${isAdded
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
            >
                {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>
        </div>
    );
};