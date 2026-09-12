import { useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import YourStack from "./components/YourStack";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import { useTechnologies } from "./hooks/useTechnologies";
import type { Technology } from "./types/technology";

function App() {
    const { technologies, loading } = useTechnologies();
    const [stack, setStack] = useState<Technology[]>([]);

    function handleAddToStack(technology: Technology) {
        const alreadyAdded = stack.some((item) => item.id === technology.id);
        if (alreadyAdded) {
            toast.warning(`${technology.name} is already in your stack!`);
            return;
        }
        setStack((prev) => [...prev, technology]);
        toast.success(`${technology.name} added to your stack`);
    }

    function handleRemove(id: number) {
        const tech = stack.find((item) => item.id === id);
        setStack((prev) => prev.filter((item) => item.id !== id));
        if (tech) {
            toast.info(`${tech.name} removed from your stack`);
        }
    }

    function handleRemoveAll() {
        setStack([]);
        toast.info("All technologies removed from your stack");
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <Hero />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
                <h2 className="text-3xl font-extrabold text-gray-900">
                    Explore the <span className="text-brand-gradient">Technologies</span>
                </h2>
                <p className="mt-2 text-gray-500">
                    Pick one technology per category to build your ideal stack.
                </p>

                <div className="mt-8 grid lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3">
                        {loading ? (
                            <Loader />
                        ) : (
                            <TechGrid technologies={technologies} stack={stack} onAdd={handleAddToStack} />
                        )}
                    </div>

                    <div className="lg:col-span-1">
                        <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default App;
