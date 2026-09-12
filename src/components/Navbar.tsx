import { useState } from "react";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Navbar */}
                <div className="flex h-16 items-center justify-between">

                    {/* Mobile Hamburger */}
                    <button
                        className="p-2 text-gray-700 md:hidden"
                        aria-label="Toggle menu"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>

                    {/* Logo */}
                    <div className="flex items-center gap-2 md:mr-auto">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-sm font-bold text-white">
                            DS
                        </div>

                        <span className="text-lg font-bold text-gray-900">
                            Dev <span className="text-brand-gradient">Stack</span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className={`text-sm font-medium transition-colors ${link === "Home"
                                    ? "text-pink-600"
                                    : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                {link}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Buttons */}
                    <div className="hidden items-center gap-4 md:flex">
                        <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
                            Sign In
                        </button>

                        <button className="rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Buttons */}
                    <div className="flex items-center gap-2 md:hidden">
                        <button className="text-xs font-medium text-gray-700">
                            Sign In
                        </button>

                        <button className="rounded-full bg-brand-gradient px-3 py-1.5 text-xs font-semibold text-white">
                            Sign Up
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <nav className="flex flex-col gap-3 border-t border-gray-100 bg-white px-4 py-3 md:hidden">
                        {navLinks.map((link) => (
                            <a
                                key={link}
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className={`text-sm font-medium ${link === "Home"
                                    ? "text-pink-600"
                                    : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                {link}
                            </a>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
};