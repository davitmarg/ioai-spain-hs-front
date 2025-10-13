"use client"; // Required for useState and other hooks

import { useState } from "react";
import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";

interface CourseSectionProps {
    id: string;
    backgroundColor: string;
    onInView: (id: string) => void;
}

// 1. Define the content for all courses in a structured array
const courses = [
    {
        id: "zero",
        title: "Zero",
        description:
            "Our 'Zero' course is designed for kids with no prior programming experience. Through interactive lessons and engaging activities, they'll learn the fundamentals of coding and build a strong foundation for future learning.",
    },
    {
        id: "beginner",
        title: "Beginner",
        description:
            "For those with some basic knowledge, the Beginner track introduces core programming concepts like variables, loops, and functions. Students will build simple games and applications to solidify their understanding.",
    },
    {
        id: "intermediate",
        title: "Intermediate",
        description:
            "This track challenges students to tackle more complex problems. We'll dive into data structures, object-oriented programming, and more advanced algorithms, preparing them for larger-scale projects.",
    },
    {
        id: "advanced",
        title: "Advanced",
        description:
            "Our Advanced course is for proficient young programmers. Participants will work on sophisticated projects, explore competitive programming techniques, and optimize their code for efficiency and performance.",
    },
    {
        id: "ai",
        title: "AI",
        description:
            "Explore the exciting world of Artificial Intelligence. This specialized track covers machine learning models, neural networks, and practical AI applications, allowing students to build their own intelligent systems.",
    },
];

const CourseSection = ({
    id,
    backgroundColor,
    onInView,
}: CourseSectionProps) => {
    // 2. Add state to track the active course
    const [activeCourseId, setActiveCourseId] = useState(courses[0].id);

    // 3. Find the full data object for the active course
    const activeCourse =
        courses.find((c) => c.id === activeCourseId) || courses[0];

    return (
        <Section id={id} backgroundColor={backgroundColor} onInView={onInView}>
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4 py-16 md:py-24">
                {/* Main Heading and Intro Text (no changes here) */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a4d] leading-tight mb-8">
                    From beginner friendly <br className="hidden md:block" /> to
                    advanced courses.
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl leading-relaxed mb-16">
                    Every child should have the opportunity to learn to code.
                    That's why our classes are designed for all levels, so every
                    child can discover the joy of coding. Participants will be
                    split into classes based on their level and previous
                    experience. Classes are taught in English.
                </p>

                {/* Course Card - Now with dynamic content and animations */}
                <div className="relative bg-[#c2f0f7] p-8 md:p-12 rounded-3xl shadow-lg w-full max-w-2xl text-left mb-16 min-h-[300px]">
                    {/* AnimatePresence allows the content to animate when it changes */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCourse.id} // The key tells Framer Motion to re-animate on change
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="text-4xl font-extrabold text-[#007bff] mb-4 capitalize">
                                {activeCourse.title}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-[80%]">
                                {activeCourse.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Hello World Blob (no changes here) */}
                    <div className="absolute top-8 right-8 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center text-center">
                        <svg
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute inset-0 w-full h-full fill-[#1a1a4d]"
                        >
                            <path
                                d="M47.7,-39.8C59.9,-20.9,66.3,2.4,59.3,21.9C52.3,41.4,32,57.1,7.2,65C-17.7,72.9,-45.1,73.1,-58.5,59.2C-72,45.3,-71.5,17.2,-64.1,-8.3C-56.7,-33.9,-42.4,-52.9,-23.4,-61.7C-4.4,-70.6,18.9,-69.3,34,-57.8C49.1,-46.2,57.4,-34.5,47.7,-39.8Z"
                                transform="translate(100 100)"
                            />
                        </svg>
                        <span className="relative z-10 text-white text-lg md:text-xl font-bold p-2">
                            Hello World
                        </span>
                    </div>
                </div>

                {/* Course Difficulty Buttons - Now interactive */}
                <div className="flex flex-wrap justify-center gap-4">
                    {courses.map((course) => (
                        <button
                            key={course.id}
                            onClick={() => setActiveCourseId(course.id)}
                            className={`
                                 py-3 px-6 rounded-full shadow-md transition-all text-base md:text-lg
                                ${
                                    activeCourseId === course.id
                                        ? "bg-[#c2f0f7] text-[#007bff]" // Active state
                                        : "bg-gray-200 text-gray-700 hover:bg-gray-300" // Inactive state
                                }
                            `}
                        >
                            {course.title}
                        </button>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default CourseSection;
