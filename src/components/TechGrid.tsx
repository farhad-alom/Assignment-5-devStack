import type { Technology } from "../types/technology";
import TechCard from "./TechCard";

interface TechGridProps {
    technologies: Technology[];
    stack: Technology[];
    onAdd: (technology: Technology) => void;
}

export default function TechGrid({ technologies, stack, onAdd }: TechGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.map((tech) => (
                <TechCard
                    key={tech.id}
                    technology={tech}
                    isAdded={stack.some((item) => item.id === tech.id)}
                    onAdd={onAdd}
                />
            ))}
        </div>
    );
};