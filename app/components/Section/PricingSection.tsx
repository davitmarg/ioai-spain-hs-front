// components/PricingSection.tsx
import Section from "./Section";

interface PricingSectionProps {
    id: string;
    backgroundColor: string;
    onInView: (id: string) => void;
}

const PricingSection = ({
    id,
    backgroundColor,
    onInView,
}: PricingSectionProps) => {
    return (
        <Section id={id} backgroundColor={backgroundColor} onInView={onInView}>
            <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto px-8 py-16 md:py-24">
                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 leading-tight font-balgin">
                    Bookings "With accommodation" Sold Out!
                </h1>

                {/* Book Button */}
                <a
                    href="#" // Add booking link here
                    className="mt-8 py-3 px-10 bg-[#e6492d] text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                >
                    Book
                </a>

                {/* Sub-text */}
                <p className="mt-8 text-lg md:text-xl text-gray-700 max-w-2xl">
                    All bookings with accommodation have been fully reserved,
                    but you can still secure your spot without accommodation if
                    you prefer.
                </p>

                {/* Travel Expenses Note */}
                <p className="mt-8 text-lg md:text-xl font-bold text-gray-800">
                    *travel expenses to and from Menorca are not included
                </p>

                {/* Pricing Columns */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full">
                    {/* Without Accommodation */}
                    <div className="text-center">
                        <div className="w-20 h-1 bg-gray-800 mx-auto mb-4"></div>
                        <h3 className="text-2xl font-bold text-gray-800 font-balgin">
                            Without Accommodation
                        </h3>
                        <p className="text-6xl font-extrabold text-gray-800 mt-2">
                            1500€
                        </p>
                    </div>

                    {/* With Accommodation (Sold Out) */}
                    <div className="text-center">
                        <div className="w-20 h-1 bg-gray-400 mx-auto mb-4"></div>
                        <h3 className="text-2xl font-bold text-gray-400 font-balgin">
                            With Accommodation
                        </h3>
                        <p className="text-6xl font-extrabold text-gray-400 mt-2 line-through">
                            2950€
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default PricingSection;
