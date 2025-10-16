import Section from "./Section";
import ParallaxImage from "../ParallaxImage";
import HorizontalImageGallery from "../HorizontalImageGallery";

interface AboutUsSectionProps {
    id: string;
    backgroundColor: string;
    onInView: (id: string) => void;
}

const galleryImages = [
    "https://framerusercontent.com/images/yeFWtO8ETpiNOG2ieGHKDMRFLcA.jpg",
    "https://framerusercontent.com/images/RNtlrlq9kwqzMfEAYedMw7T18.jpg",
    "https://framerusercontent.com/images/ogsp4MBrpSSXvoM2DAPQtG8gY.jpg",
    "https://framerusercontent.com/images/qXDSsQ4iTUa4V1evE3FMbMy99o.jpg",
    "https://framerusercontent.com/images/Zjy64GxHJ2kDRxp5lp082X6G0A.jpg",
];

const AboutUsSection = ({
    id,
    backgroundColor,
    onInView,
}: AboutUsSectionProps) => {
    return (
        <Section id={id} backgroundColor={backgroundColor} onInView={onInView}>
            <div className="w-full flex flex-col items-center pt-7 py-5 space-y-8 xl:space-y-12 2xl:space-y-16">
                {/* Top text - constrained width */}
                <div className="text-center w-full max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-gray-800">
                        July 5th — 19th 2026
                    </h2>
                    <p className="mt-4 text-lg md:text-2xl xl:text-3xl 2xl:text-4xl text-gray-600 font-semibold leading-relaxed xl:leading-loose">
                        Two weeks of intellectual wizardry for young minds — the
                        Summer International Olympic Sports Camp in Mathematics,
                        Computer Science, and Artificial Intelligence.
                    </p>
                </div>

                {/* Three parallax images side by side - full width */}
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 w-full px-6">
                    <div className="hidden md:block w-full md:w-1/3">
                        <ParallaxImage
                            src="https://framerusercontent.com/images/gOiX6DyxV7QCEDxtEYiNtds4.jpg"
                            alt="Abstract colorful shape"
                            enableParallax
                            parallaxStrength={-20}
                            className="h-[300px] md:h-[400px] xl:h-[500px] 2xl:h-[600px]"
                        />
                    </div>

                    <div className="w-full md:w-1/3">
                        <ParallaxImage
                            src="https://framerusercontent.com/images/C8FhPXN8mu6lqt7N9PtNEAHcgso.jpeg"
                            alt="Barcelona architecture"
                            enableParallax
                            parallaxStrength={-80}
                            className="h-[300px] md:h-[400px] xl:h-[500px] 2xl:h-[600px]"
                        />
                    </div>

                    <div className="hidden md:block w-full md:w-1/3">
                        <ParallaxImage
                            src="https://framerusercontent.com/images/7OM6JdlwlX5qr4pbwwCiYKTCcXc.jpg"
                            alt="Geometric building pattern"
                            enableParallax
                            parallaxStrength={-30}
                            className="h-[300px] md:h-[400px] xl:h-[500px] 2xl:h-[600px]"
                        />
                    </div>
                </div>

                {/* Bottom text - constrained width */}
                <div className="text-center w-full max-w-4xl mx-auto">
                    <p className="text-lg md:text-2xl xl:text-3xl 2xl:text-4xl text-gray-700 leading-relaxed xl:leading-loose">
                        We’re thrilled to invite young innovators aged 10 to 20
                        to an unforgettable two-week international camp in Spain
                        — a celebration of Mathematics, Computer Science, and
                        Artificial Intelligence. Set in a vibrant and inspiring
                        coastal setting, the camp combines fun, challenge, and
                        discovery.
                        <br />
                        <br />
                        Join us for a sparkling blue-coast journey where
                        creativity meets competition — and where the next
                        generation of digital and scientific leaders begins
                        their path to success!
                    </p>
                </div>

                {/* Full-width gallery */}
                <div className="w-full">
                    <HorizontalImageGallery
                        images={galleryImages}
                        duration={15}
                        heightClassName="h-[250px] md:h-[350px]"
                        backgroundColorClassName="bg-transparent"
                    />
                </div>
            </div>
        </Section>
    );
};

export default AboutUsSection;
