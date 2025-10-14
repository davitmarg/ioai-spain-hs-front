// components/DedicatedTrackSection.tsx
import Section from "./Section";

interface DedicatedTrackSectionProps {
    id: string;
    backgroundColor: string;
    onInView: (id: string) => void;
}

const DedicatedTrackSection = ({
    id,
    backgroundColor,
    onInView,
}: DedicatedTrackSectionProps) => {
    return (
        <Section id={id} backgroundColor={backgroundColor} onInView={onInView}>
            <div className="w-full max-w-4xl mx-auto px-8 py-16 md:py-24 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-700 leading-tight font-balgin">
                    IOAI Spain
                </h2>
                <p className="mt-6 text-lg md:text-xl text-gray-900 max-w-2xl mx-auto leading-relaxed">
                    This track will focus on training the national team for the
                    International Olympiad in Artificial Intelligence (IOAI) — a
                    key milestone in the country’s preparation for the global
                    stage.
                </p>
            </div>
        </Section>
    );
};

export default DedicatedTrackSection;
