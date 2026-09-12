import { useEffect, useState } from "react";
import type { Technology } from "../types/technology";

export function useTechnologies() {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        {/*THIS IS DYNAMIC PROMISE */ }
        import("../data/technologies.json")
            .then((module) => {
                setTechnologies(module.default as Technology[]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { technologies, loading };
};

