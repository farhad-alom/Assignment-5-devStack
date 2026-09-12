
const linkGroups = [
    {
        title: "Product",
        links: ["Home", "Technologies", "Projects"],
    },
    {
        title: "Company",
        links: ["About", "Contact", "Careers"],
    },
    {
        title: "Legal",
        links: ["Privacy Policy", "Terms of Service"],
    },
];

const socials = ["GitHub", "Twitter", "LinkedIn"];

export default function Footer() {
    return (
        <footer className="border-t border-gray-100 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand block */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-bold text-sm">
                                DS
                            </div>
                            <span className="font-bold text-lg text-gray-900">
                                Dev <span className="text-brand-gradient">Stack</span>
                            </span>
                        </div>
                        <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
                            Curated tools, technologies, and resources for developers
                            building modern software.
                        </p>
                        <div className="mt-4 flex gap-4 text-sm text-gray-500">
                            {socials.map((social) => (
                                <a key={social} href="#" className="hover:text-gray-900">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/*Link groups*/}
                    {linkGroups.map((group) => (
                        <div key={group.title}>
                            <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase">
                                {group.title}
                            </h4>
                            <ul className="mt-4 flex flex-col gap-3">
                                {group.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/*  Bottom bar */}
                <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-700">Privacy</a>
                        <a href="#" className="hover:text-gray-700">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

