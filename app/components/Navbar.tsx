"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SectionInfo = {
    id: string;
    label: string;
};

interface NavbarProps {
    sections: SectionInfo[];
    activeColor: string;
    activeTextColor: string; // This will now be a hex code
}

const menuItemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
};

const Navbar = ({ sections, activeColor, activeTextColor }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    // Effect to prevent body scroll when the mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        // Cleanup function to reset the style when the component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            <motion.nav
                className="sticky top-0 z-40 backdrop-blur-sm shadow-sm font-extrabold"
                animate={{ backgroundColor: activeColor }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                {/* --- CHANGES START HERE --- */}
                {/* 1. Add max-width and more padding for very large screens */}
                <div className="container mx-auto flex max-w-screen-2xl items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <motion.div
                        animate={{ color: activeTextColor }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="bg-white/45 rounded-2xl py-2 px-3 flex items-center justify-center"
                    >
                        <a href="#home" className="inline-block">
                            {/* 2. Increase logo size ONLY on 2xl screens */}
                            <img
                                src="/ioai-spain.svg"
                                alt="IOAI Spain"
                                className="h-8 w-auto mx-auto 2xl:h-10"
                            />
                        </a>
                    </motion.div>

                    {/* Desktop Menu */}
                    {/* 3. Increase space between items ONLY on 2xl screens */}
                    <ul className="hidden md:flex items-center space-x-8 2xl:space-x-12">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <motion.div
                                    animate={{ color: activeTextColor }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    }}
                                >
                                    {/* 4. Increase font size ONLY on 2xl screens (1536px+) */}
                                    <a
                                        href={`#${section.id}`}
                                        className="hover:text-pink-500 transition-colors text-lg 2xl:text-xl tracking-wide"
                                    >
                                        {section.label}
                                    </a>
                                </motion.div>
                            </li>
                        ))}
                    </ul>
                    {/* --- CHANGES END HERE --- */}

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden z-50 text-inherit"
                    >
                        <motion.div animate={{ color: activeTextColor }}>
                            {isOpen ? (
                                // Close Icon (X)
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                // Hamburger Icon
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-16 6h16"
                                    />
                                </svg>
                            )}
                        </motion.div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu (Dropdown) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 z-30 flex items-center justify-center bg-white"
                        style={{ backgroundColor: activeColor }}
                    >
                        <ul className="flex flex-col items-center space-y-8 ">
                            {sections.map((section) => (
                                <motion.li
                                    key={section.id}
                                    variants={menuItemVariants}
                                >
                                    <a
                                        href={`#${section.id}`}
                                        className="text-4xl font-bold tracking-wide"
                                        style={{ color: activeTextColor }}
                                        onClick={() => setIsOpen(false)} // Close menu on click
                                    >
                                        {section.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
