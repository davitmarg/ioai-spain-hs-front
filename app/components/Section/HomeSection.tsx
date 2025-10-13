// components/HomeSection.tsx
"use client"; // If you plan to use client-side hooks or interactivity

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface HomeSectionProps {
    id: string;
    backgroundColor: string;
    onInView: (id: string) => void;
}

const HomeSection = ({ id, backgroundColor, onInView }: HomeSectionProps) => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            onInView(id);
        }
    }, [id, inView, onInView]);

    return (
        <section
            ref={ref}
            id={id}
            className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
            style={{ backgroundColor: backgroundColor }}
        >
            <img
                src="https://images.unsplash.com/photo-1609422644211-a85c36ee36a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                alt="IOAI Camp background"
                className="w-6/7 h-full object-cover"
                loading="lazy"
            />

            {/* Overlay for text and to slightly dim video */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-20">
                <h1 className="text-6xl md:text-8xl font-extrabold text-white z-10">
                    IOAI Camp
                </h1>
            </div>
        </section>
    );
};

export default HomeSection;
