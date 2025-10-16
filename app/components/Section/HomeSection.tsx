"use client";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Section from "./Section";

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
        <Section id={id} backgroundColor={backgroundColor} onInView={onInView}>
            <div className="relative w-full h-[800px] md:h-auto flex items-center justify-center">
                {/* Background image */}
                <img
                    src="https://images.unsplash.com/photo-1609422644211-a85c36ee36a7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                    alt="IOAI Camp background"
                    className="w-full h-full md:h-auto object-cover"
                    loading="lazy"
                />

                {/* Overlay for text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center md:justify-start md:pt-24 bg-black/25 px-4 text-center">
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white leading-tight">
                        Summer Camp
                    </h1>
                </div>
            </div>
        </Section>
    );
};

export default HomeSection;
