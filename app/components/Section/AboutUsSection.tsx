import Section from "./Section";
import ParallaxImage from "../ParallaxImage";
import HorizontalImageGallery from "../HorizontalImageGallery"; // Added import for the gallery

interface AboutUsSectionProps {
    id: string;
    backgroundColor: string;
    onInView: (id: string) => void;
}

// Placeholder images for the gallery from picsum.photos
const galleryImages = [
    "https://picsum.photos/seed/picsum1/800/600",
    "https://picsum.photos/seed/picsum2/800/600",
    "https://picsum.photos/seed/picsum3/800/600",
    "https://picsum.photos/seed/picsum4/800/600",
    "https://picsum.photos/seed/picsum5/800/600",
    "https://picsum.photos/seed/picsum6/800/600",
];

const AboutUsSection = ({
    id,
    backgroundColor,
    onInView,
}: AboutUsSectionProps) => {
    return (
        <Section id={id} backgroundColor={backgroundColor} onInView={onInView}>
            {/* Main container div. Height increased to accommodate the gallery. */}
            <div className="relative w-full min-h-[1600px] overflow-hidden py-15">
                {/* Top Text Content - Position remains the same */}
                <div className="absolute top-[100px] left-0 right-0 z-20">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl text-gray-800 tracking-wide font-extrabold">
                            July 1st — 15th Summer Day Camp
                        </h2>
                        <p className="mt-4 text-xl md:text-2xl text-gray-600">
                            A 2-Week Program of Algorithmic Excellence for Young
                            Innovators
                        </p>
                    </div>
                </div>

                {/* Bottom Text Content - Moved up to make space for the gallery */}
                <div className="absolute bottom-[450px] left-0 right-0 z-20 pb-10">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto px-4">
                        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed md:leading-loose">
                            Join our island coding camp for ages 10 to 18. Learn
                            practical coding and problem solving. Build
                            confidence and real projects.
                        </p>
                    </div>
                </div>

                {/* Parallax Images - Positions adjusted slightly for the new layout */}
                <ParallaxImage
                    src="https://framerusercontent.com/images/gOiX6DyxV7QCEDxtEYiNtds4.jpg"
                    alt="Abstract colorful shape"
                    className="absolute z-10 w-1/5 top-[300px] left-[3%]"
                    enableParallax={true}
                    parallaxStrength={150}
                />
                <ParallaxImage
                    src="https://framerusercontent.com/images/C8FhPXN8mu6lqt7N9PtNEAHcgso.jpeg"
                    alt="Barcelona architecture"
                    className="absolute z-10 h-2/5 w-1/2 top-[250px] left-1/2 -translate-x-1/2 opacity-90"
                    enableParallax={true}
                    parallaxStrength={-100}
                />
                <ParallaxImage
                    src="https://framerusercontent.com/images/7OM6JdlwlX5qr4pbwwCiYKTCcXc.jpg"
                    alt="Geometric building pattern"
                    className="absolute z-10 w-1/5 top-[500px] right-[3%]"
                    enableParallax={true}
                    parallaxStrength={200}
                />

                {/* --- Horizontal Image Gallery --- */}
                {/* Positioned at the very bottom of the container */}
                <div className="absolute bottom-0 left-0 w-full py-5 z-20">
                    <HorizontalImageGallery
                        images={galleryImages}
                        heightClassName="h-[400px]"
                        backgroundColorClassName="bg-transparent" // Transparent background to show the section color
                    />
                </div>
            </div>
        </Section>
    );
};

export default AboutUsSection;
