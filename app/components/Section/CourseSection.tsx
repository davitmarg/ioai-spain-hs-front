"use client"; // Required for useState and other hooks

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

interface CourseSectionProps {
    id: string;
    backgroundColor: string;
    onInView: (id: string) => void;
}

// 1. Define specific types for courses and levels
interface Course {
    id: string;
    title: string;
    description: string;
}

interface Level {
    title: string;
    courses: Course[];
}

// Define a type for the level keys to ensure type safety
type LevelId = "beginner" | "advanced";

// 2. Define the hierarchical content structure with the new types
const levels: Record<LevelId, Level> = {
    beginner: {
        title: "Beginner",
        courses: [
            {
                id: "mathematics",
                title: "Mathematics",
                description:
                    "In the exciting world of math at our summer camp you will learn how to distinguish truth from falsehood, make scientific predictions, and present convincing arguments. No previous mathematical experience is required, only a willingness to explore and discover new things. Join us and uncover the many hidden wonders of math!",
            },
            {
                id: "game-development",
                title: "Game development",
                description:
                    "Learn game design fundamentals: storyboarding, and basic programming. Discover gameplay mechanics and user interaction to create your own games.",
            },
            {
                id: "python-for-beginners",
                title: "Python for Beginners",
                description:
                    "Learn Python programming basics: data types, control structures, functions, and libraries. Gain hands-on experience building simple applications and solving problems.",
            },
            {
                id: "design-track",
                title: "Design Track",
                description:
                    "Learn the basics of design, including colour theory and layout, to create attractive and functional designs. This course boosts creativity and teaches effective design principles.",
            },
        ],
    },
    advanced: {
        title: "Advanced",
        courses: [
            {
                id: "mathematics",
                title: "Mathematics",
                description:
                    "In the exhilarating world of advanced math at our summer camp, you will dive deep into problem-solving, abstraction, and creative reasoning. Explore topics from combinatorics, number theory, and geometry to modern applications in algorithms and artificial intelligence. You’ll learn to construct rigorous proofs, tackle Olympiad-style challenges, and think like a true mathematician. A solid foundation and curiosity for deeper exploration are all you need. Join us and push the boundaries of what you thought possible in mathematics!",
            },
            {
                id: "algorithms",
                title: "Introduction to Algorithms",
                description:
                    "Learn the basics of algorithms to solve problems more efficiently. Discover simple methods to organize, analyze, and execute tasks step-by-step.",
            },
            {
                id: "ai",
                title: "AI",
                description:
                    "The summer school program on AI provides a theoretical foundation and hands-on experience on recent advances in Machine Learning, Deep Learning, and Language modeling fields. It includes a crash course on AI, a robotics workshop, GPT-like solutions adaptation",
            },
        ],
    },
};

const CourseSection = ({
    id,
    backgroundColor,
    onInView,
}: CourseSectionProps) => {
    // 3. State for active level and course with explicit types
    const [activeLevelId, setActiveLevelId] = useState<LevelId>("beginner");
    const [activeCourseId, setActiveCourseId] = useState(
        levels.beginner.courses[0].id
    );

    // 4. Find data for active level and course (now type-safe)
    const activeLevel = levels[activeLevelId];
    const activeCourse =
        activeLevel.courses.find((c) => c.id === activeCourseId) ||
        activeLevel.courses[0];

    // 5. Handle level changes with the explicit LevelId type
    const handleLevelChange = (levelId: LevelId) => {
        setActiveLevelId(levelId);
        setActiveCourseId(levels[levelId].courses[0].id);
    };

    return (
        <Section id={id} backgroundColor={backgroundColor} onInView={onInView}>
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4 py-16 md:py-24">
                {/* Main Heading and Intro Text */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a4d] leading-tight mb-8">
                    From beginner friendly <br className="hidden md:block" /> to
                    advanced courses.
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl leading-relaxed mb-16">
                    Every child should have the opportunity to explore concepts
                    in mathematics, coding, problem-solving, and AI through
                    engaging workshops, team competitions, and cultural
                    activities. That's why our classes are designed for all
                    levels, so every child can discover the joy of building a
                    strong foundation for future learning.
                </p>

                {/* Course Card */}
                <div className="relative bg-[#c2f0f7] p-8 md:p-12 rounded-3xl shadow-lg w-full max-w-2xl text-left mb-16 min-h-[450px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeLevelId + activeCourse.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#007bff] mb-4 capitalize">
                                {activeCourse.title}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                                {activeCourse.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Two-Tiered Button Selection */}
                <div className="flex flex-col items-center gap-8 w-full">
                    {/* Level Toggle Switch */}
                    <div className="relative flex w-full max-w-xs mx-auto items-center rounded-full bg-gray-200 p-1 shadow-inner">
                        <div
                            className="absolute h-[calc(100%-0.5rem)] w-1/2 rounded-full bg-[#1a1a4d] shadow-md transition-transform duration-300 ease-in-out"
                            style={{
                                transform:
                                    activeLevelId === "beginner"
                                        ? "translateX(0%)"
                                        : "translateX(100%)",
                            }}
                        />
                        <button
                            onClick={() => handleLevelChange("beginner")}
                            className={`relative z-10 w-1/2 py-2.5 rounded-full text-lg font-semibold transition-colors duration-300 ${
                                activeLevelId === "beginner"
                                    ? "text-white"
                                    : "text-[#1a1a4d]"
                            }`}
                        >
                            Beginner
                        </button>
                        <button
                            onClick={() => handleLevelChange("advanced")}
                            className={`relative z-10 w-1/2 py-2.5 rounded-full text-lg font-semibold transition-colors duration-300 ${
                                activeLevelId === "advanced"
                                    ? "text-white"
                                    : "text-[#1a1a4d]"
                            }`}
                        >
                            Advanced
                        </button>
                    </div>

                    {/* Course Buttons for the Active Level */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {activeLevel.courses.map((course) => (
                            <button
                                key={course.id}
                                onClick={() => setActiveCourseId(course.id)}
                                className={`
                                    py-3 px-6 rounded-full shadow-sm transition-all text-base md:text-lg font-medium
                                    ${
                                        activeCourseId === course.id
                                            ? "bg-[#007bff] text-white scale-105 shadow-md"
                                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                    }
                                `}
                            >
                                {course.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default CourseSection;
