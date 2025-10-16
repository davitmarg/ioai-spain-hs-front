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
    activeTextColor: string;
}

const menuItemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
};

const Navbar = ({ sections, activeColor, activeTextColor }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    // Disable body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
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
                <div
                    className="
                        container mx-auto flex items-center justify-between
                        px-3 lg:px-5
                        py-4 md:py-3
                        max-h-[120px]
                        max-w-screen-2xl
                    "
                >
                    {/* Logo */}
                    <motion.div
                        animate={{ color: activeTextColor }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="
                            rounded-2xl flex items-center justify-left w-1/2 md:w-1/4
                        "
                    >
                        <a
                            href="#home"
                            className="
            flex flex-col items-center justify-center
            md:flex-col sm:flex-row sm:items-center
        "
                        >
                            <img
                                src={
                                    activeTextColor === "#ffffff"
                                        ? "/leaguesofcode.png"
                                        : "/leaguesofcode-colored.png"
                                }
                                alt="IOAI Spain"
                                className="
                h-7 sm:h-6 md:h-8 lg:h-9 2xl:h-10
                w-auto
            "
                            />
                            <p
                                className="
                font-extrabold
                text-center sm:text-left
                text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl
                mt-1 sm:mt-0 sm:ml-2
            "
                            >
                                Leagues of Code
                            </p>
                        </a>
                    </motion.div>

                    {/* Desktop Menu */}
                    <ul
                        className="
                            hidden md:flex items-center justify-end 
                            space-x-4 lg:space-x-7 2xl:space-x-10
                            w-[90%]
                        "
                    >
                        {sections.map((section) => (
                            <li key={section.id}>
                                <motion.div
                                    animate={{ color: activeTextColor }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <a
                                        href={`#${section.id}`}
                                        className="
                                            hover:text-pink-500 transition-colors
                                            text-base sm:text-lg 
                                            lg:text-xl 
                                            2xl:text-2xl 
                                            tracking-wide
                                        "
                                    >
                                        {section.label}
                                    </a>
                                </motion.div>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden z-50 text-inherit"
                    >
                        <motion.div animate={{ color: activeTextColor }}>
                            {isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 sm:h-9 sm:w-9"
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
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 sm:h-9 sm:w-9"
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
                        className="fixed inset-0 z-30 flex items-center justify-center"
                        style={{ backgroundColor: activeColor }}
                    >
                        <ul className="flex flex-col items-center space-y-8">
                            {sections.map((section) => (
                                <motion.li
                                    key={section.id}
                                    variants={menuItemVariants}
                                >
                                    <a
                                        href={`#${section.id}`}
                                        className="
                                            font-bold tracking-wide
                                            text-3xl sm:text-4xl md:text-5xl
                                        "
                                        style={{ color: activeTextColor }}
                                        onClick={() => setIsOpen(false)}
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
