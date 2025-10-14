"use client"; // Added for Framer Motion and useState

import { useState } from "react"; // Needed for hover state if we wanted to manage it differently, but Framer handles it
import Section from "./Section";
import { motion } from "framer-motion"; // Import motion for animations

interface ExperienceMainSectionProps {
    id: string;
    backgroundColor: string;
    onInView: (id: string) => void;
}

// Array of placeholder images and names for the instructors
const instructors = [
    {
        id: "inst1",
        name: "Nikolay",
        src: "https://framerusercontent.com/images/ARcB7fcjc5zuAAKiMaT49tEY4k.png",
    },
    {
        id: "inst2",
        name: "Brianda",
        src: "https://framerusercontent.com/images/Gjz88nUpqs8tBJPqnyDKq4LR0.png",
    },
    {
        id: "inst3",
        name: "Maksym",
        src: "https://framerusercontent.com/images/WDTL6OSLIZQeIb99eMMYmz90t0.png",
    },
    {
        id: "inst4",
        name: "Ilya",
        src: "https://framerusercontent.com/images/aCmtU8ENEhGRS1MTXEJjyV90g.png",
    },
    {
        id: "inst5",
        name: "Elena",
        src: "https://framerusercontent.com/images/7rYnNe9SBRd0W91DUbkzRwmsenc.png",
    },
    {
        id: "inst6",
        name: "Brayan",
        src: "https://framerusercontent.com/images/a4nHzhVDfnJL9FWsGiyS4n8gb8.png",
    },
    {
        id: "inst7",
        name: "Humberto",
        src: "https://framerusercontent.com/images/WxfbBSGTOvu7eA1w4FQE06gg.png",
    },
];

const ExperienceMainSection = ({
    id,
    backgroundColor,
    onInView,
}: ExperienceMainSectionProps) => {
    return (
        <Section id={id} backgroundColor={backgroundColor} onInView={onInView}>
            <div className="w-full max-w-6xl mx-auto px-8 py-16 md:py-24">
                {/* --- Part 1: Sa Vinyeta Country House --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-24 md:mb-32">
                    {/* Left Column: Image */}
                    <div className="w-full aspect-square">
                        <img
                            src="https://framerusercontent.com/images/BLizCTVTC8INLFdM8QQQDWUhpY.jpeg"
                            alt="Sa Vinyeta Country House"
                            className="rounded-3xl object-cover w-full h-full shadow-2xl"
                        />
                    </div>
                    {/* Right Column: Text Content */}
                    <div className="text-left">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#e6492d] leading-tight font-balgin">
                            Unique stay for your child at Sa Vinyeta Country
                            House.
                        </h2>
                        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                            Rest easy knowing your child is in safe hands at our
                            camp. Our partner accommodation is designed with the
                            comfort and safety of your child in mind, so you can
                            have peace of mind while they have the time of their
                            lives.
                        </p>
                        <a
                            href="#" // Add the actual link here
                            className="inline-block mt-8 py-3 px-8 border-2 border-[#e6492d] text-[#e6492d] font-bold rounded-full hover:bg-[#e6492d] hover:text-white transition-colors duration-300"
                        >
                            See the accommodation options
                        </a>
                    </div>
                </div>

                {/* --- Part 2: Education Center --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-24 md:mb-32">
                    {/* Left Column: Text Content (order is swapped) */}
                    <div className="text-left md:order-last">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#e6492d] leading-tight font-balgin">
                            An education center to quench your child's thirst
                            for knowledge
                        </h2>
                        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                            Our community of young, eager-to-learn explorers
                            thrives on playtime and creativity. With experienced
                            mentors and a supportive atmosphere, our students
                            develop their coding skills and unleash their full
                            potential.
                        </p>
                    </div>
                    {/* Right Column: Image */}
                    <div className="w-full aspect-video md:order-first">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop"
                            alt="Students having fun"
                            className="rounded-3xl object-cover w-full h-full shadow-2xl"
                        />
                    </div>
                </div>

                {/* --- Part 3: Instructors --- */}
                <div className="text-center">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#4f46e5] leading-tight font-balgin">
                        Instructors that foster friendships to enhance learning
                    </h2>
                    <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        Our instructors understand how the minds of children
                        work and have the ability to build a strong personal
                        connection with them through the use of interactive
                        activities that help to foster an environment for
                        learning in a playful manner.
                    </p>
                    {/* Instructor Image Grid with hover animations and alternating shapes */}
                    <div className="mt-16 flex-wrap justify-center gap-8 hidden">
                        {instructors.map((instructor, index) => (
                            <motion.div
                                key={instructor.id} // Use unique id for key
                                className={`
                                    bg-orange-300
                                    relative
                                    w-32 h-32 md:w-40 md:h-40
                                    overflow-hidden shadow-lg
                                    ${
                                        index % 2 === 0
                                            ? "rounded-[20%]"
                                            : "rounded-full"
                                    } // Alternating shapes
                                    group // Tailwind group for hover effects
                                `}
                                whileHover="hover" // Framer Motion hover state
                                initial="rest" // Initial state
                            >
                                <img
                                    src={instructor.src}
                                    alt={instructor.name}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" // Subtle zoom on hover
                                />
                                {/* Name Overlay */}
                                <motion.div
                                    variants={{
                                        rest: { y: "100%" }, // Start completely hidden below
                                        hover: { y: "0%" }, // Slide up to cover fully
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeOut",
                                    }}
                                    className="absolute inset-x-0 bottom-0 h-full bg-blue-600 bg-opacity-60 flex items-center justify-center p-2"
                                >
                                    <span className="text-white text-lg font-bold">
                                        {instructor.name}
                                    </span>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ExperienceMainSection;
