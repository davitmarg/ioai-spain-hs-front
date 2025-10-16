// components/Section.tsx
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface SectionProps {
    id: string;
    children: React.ReactNode;
    backgroundColor: string;
    onInView: (id: string) => void;
    pixelThreshold?: number; // pixels that must be inside viewport to count as inView
}

const Section = ({
    id,
    children,
    backgroundColor,
    onInView,
    pixelThreshold = 0,
}: SectionProps) => {
    const rootMargin = `-${pixelThreshold}px 0px -${pixelThreshold}px 0px`;

    const { ref, inView } = useInView({
        rootMargin,
        threshold: 0.2, // any intersection with the shrunk root counts
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
            style={{ backgroundColor }}
            className="relative min-h-[700px] h-auto flex items-center justify-center"
        >
            {children}
        </section>
    );
};

export default Section;
