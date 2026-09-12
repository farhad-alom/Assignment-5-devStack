import type { Technology } from "../types/technology";

interface YourStackProps {
    stack: Technology[];
    onRemove: (id: number) => void;
    onRemoveAll: () => void;
}

export default function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
    const count = stack.length;

    return (
        <div className="border border-gray-200 rounded-xl p-5 sticky top-24">
            <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
            <p className="text-sm text-gray-400 mt-1">
                {count === 0 ? "No technologies selected yet." : `${count} Technology Selected`}
            </p>

            {/* ===== Empty state ===== */}
            {count === 0 ? (
                <div className="mt-4 border-2 border-dashed border-gray-200 rounded-lg py-10 text-center text-sm text-gray-400">
                    Your stack is empty.
                </div>
            ) : (
                <>
                    {/* ===== Stack items (1 column) ===== */}
                    <div className="mt-4 flex flex-col gap-3">
                        {stack.map((tech) => (
                            <div
                                key={tech.id}
                                className="flex items-center gap-3 border border-gray-200 rounded-lg p-3"
                            >
                                <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-gray-900 truncate">{tech.name}</p>
                                    <p className="text-xs text-gray-400">{tech.category}</p>
                                </div>
                                <button
                                    onClick={() => onRemove(tech.id)}
                                    aria-label={`Remove ${tech.name}`}
                                    className="text-gray-400 hover:text-gray-700 text-lg leading-none px-1"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* ===== Remove All ===== */}
                    <button
                        onClick={onRemoveAll}
                        className="mt-5 w-full py-2.5 rounded-lg text-sm font-semibold text-red-500 border border-red-200 hover:bg-red-50 transition-colors"
                    >
                        Remove All
                    </button>
                </>
            )}
        </div>
    );
};
