// components/SafetySection.tsx
import Section from "./Section";

interface SafetySectionProps {
    id: string;
    backgroundColor: string;
    onInView: (id: string) => void;
}

const SafetySection = ({
    id,
    backgroundColor,
    onInView,
}: SafetySectionProps) => {
    return (
        <Section id={id} backgroundColor={backgroundColor} onInView={onInView}>
            <div className="w-full max-w-6xl mx-auto px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left Column: Image */}
                    <div className="w-full aspect-square">
                        <img
                            src="https://framerusercontent.com/images/W7x4k7r8ItZ8Tc3DClj4hrBwzo.jpg?scale-down-to=1024"
                            alt="Camp counselor ensuring safety"
                            className="rounded-3xl object-cover w-full h-full shadow-2xl"
                        />
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="text-left">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-[#e6492d] leading-tight font-balgin">
                            Safety for your child is our first priority
                        </h2>
                        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                            Rest assured that your child's hygiene and
                            well-being are our top priority at the IAOI Spain
                            Camp. Our certified camp counselors report directly
                            to the Camp Director and Camp Manager, and closely
                            monitor each camper to ensure they have a safe and
                            enjoyable summer. To ensure a seamless experience
                            for everyone, our counselors have daily meetings to
                            review events and address any concerns about the
                            children.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default SafetySection;
