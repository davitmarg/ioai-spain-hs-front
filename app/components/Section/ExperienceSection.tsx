// components/ExperienceSection.tsx
import Section from "./Section";
import HorizontalImageGallery from "../HorizontalImageGallery";

interface ExperienceSectionProps {
    id: string;
    backgroundColor: string;
    onInView: (id: string) => void;
}

// A new set of images specifically for this section's gallery
const experienceImages = [
    "https://framerusercontent.com/images/u4MHd4fnFYH9zUffMSH2kBezSus.jpeg?scale-down-to=512",
    "https://framerusercontent.com/images/7HfWRypk2bHyxrQwin2eKQafMI.jpg?scale-down-to=512",
    "https://framerusercontent.com/images/1FjVpy7XirGy4laxMGiyTBaacCE.jpeg?scale-down-to=512",
    "https://framerusercontent.com/images/c80HoN21nlTZ3NTCfrkqYN7v0.jpeg?scale-down-to=512",
    "https://framerusercontent.com/images/IRgn7C2GJ5shGi34Z46L4M0bDQ.jpg?scale-down-to=512",
    "https://framerusercontent.com/images/GYZ6bsyVXg0bwMVeEDQ7Itj3jvM.jpg?scale-down-to=512",
];

const ExperienceSection = ({
    id,
    backgroundColor,
    onInView,
}: ExperienceSectionProps) => {
    return (
        // Note: The parent Section component now uses the background color directly
        <Section id={id} backgroundColor={backgroundColor} onInView={onInView}>
            {/* Main container for the text and the gallery */}
            <div className="flex flex-col justify-between h-full w-full">
                {/* Top part: Text content */}
                <div className="flex-grow flex items-center px-8 md:px-16 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-7xl mx-auto">
                        {/* Left Column: Heading */}
                        <div className="flex items-center">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl mt-15 font-extrabold text-white leading-tight text-left">
                                Just a code-a-way into the summer vibes of
                                Menorca!
                            </h1>
                        </div>
                        {/* Right Column: Paragraph */}
                        <div className="flex items-center">
                            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-left py-7">
                                Welcome to Menorca, the perfect destination for
                                a summer camp experience that your kids will
                                never forget. Imagine your child arriving on the
                                sun-drenched shores of this island, taking in
                                the peaceful ambiance that sets it apart from
                                other popular tourist destinations.
                                <br />
                                <br />
                                From the charming twin cities of Maó and
                                Ciutadella, to the stunning bays along the
                                coast, and the tranquil rural landscapes inland,
                                Menorca is a treasure trove of natural beauty
                                and cultural richness. With our summer camp
                                program, your child will not only enjoy all that
                                the island has to offer, but they will also have
                                the opportunity to learn and grow in a fun and
                                safe environment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom part: Horizontal Image Gallery */}
                <div className="w-full">
                    <HorizontalImageGallery
                        images={experienceImages}
                        duration={50}
                        heightClassName="h-[250px] md:h-[350px]"
                        backgroundColorClassName="bg-transparent"
                    />
                </div>
            </div>
        </Section>
    );
};

export default ExperienceSection;
