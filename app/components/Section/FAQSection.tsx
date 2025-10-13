// components/FAQSection.tsx
"use client";

import { useState } from "react";
import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";

interface FAQSectionProps {
    id: string;
    backgroundColor: string;
    onInView: (id: string) => void;
}

// Data for the FAQ section, tailored to an AI Olympiad camp
const faqData = [
    {
        question: "What is the main focus of the camp?",
        answer: "The camp is an intensive training program focused on competitive programming and algorithms, specifically preparing students for AI and Informatics Olympiads like the IOI. Our curriculum covers advanced data structures, complex algorithms, and problem-solving strategies essential for high-level competition.",
    },
    {
        question: "What is the age range for participants?",
        answer: "The camp is designed for motivated students aged 10 to 18. Participants will be grouped based on their existing skill level, from beginner to advanced, ensuring a challenging and supportive environment for everyone.",
    },
    {
        question: "How are students assessed for placement?",
        answer: "Upon registration, students are given an online assessment to gauge their current knowledge of algorithms and data structures. This helps us place them in the appropriate group (Beginner, Intermediate, Advanced, AI) to maximize their learning.",
    },
    {
        question: "What programming languages are used?",
        answer: "The primary language for instruction and problem-solving is Python, as it is widely used in artificial intelligence, data science, and modern software development. Students should have a basic understanding of Python syntax before attending.",
    },
    {
        question: "What is the instructor-to-student ratio?",
        answer: "We maintain a low instructor-to-student ratio, typically around 1:8, to ensure every participant receives personalized attention, feedback, and mentorship from our experienced, high-level coaches.",
    },
    {
        question: "Are there activities other than coding?",
        answer: "Yes! While the focus is academic, we believe in a balanced experience. Afternoons include a variety of activities like swimming, hiking, and team sports, taking advantage of the beautiful Menorca location to relax and build friendships.",
    },
];

// Reusable FAQ Item Component
const FAQItem = ({
    question,
    answer,
}: {
    question: string;
    answer: string;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="border-b border-gray-300 py-6"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-center w-full text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                    {question}
                </h3>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <svg
                        className="w-6 h-6 text-gray-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v12m6-6H6"
                        />
                    </svg>
                </motion.div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pt-4 text-base md:text-lg text-gray-600 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQSection = ({ id, backgroundColor, onInView }: FAQSectionProps) => {
    return (
        <Section id={id} backgroundColor={backgroundColor} onInView={onInView}>
            <div className="w-full max-w-4xl mx-auto px-8 py-16 md:py-24">
                <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-16 font-balgin text-gray-800">
                    FAQ
                </h1>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default FAQSection;
