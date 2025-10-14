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
                {/* Book Button */}
                <a
                    href="#" // Add booking link here
                    className="py-4 px-12 bg-[#e6492d] text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 text-2xl"
                >
                    Book
                </a>

                {/* Travel Expenses Note */}
                <p className="mt-10 text-lg md:text-xl font-bold text-gray-800">
                    *travel expenses to and from the Summer Camp are not
                    included
                </p>

                {/* Pricing Columns */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 w-full">
                    {/* Without Accommodation */}
                    <div className="text-center">
                        <div className="w-20 h-1 bg-gray-800 mx-auto mb-4"></div>
                        <h3 className="text-3xl font-bold text-gray-800 font-balgin">
                            Without Accommodation
                        </h3>
                        <p className="text-6xl font-extrabold text-gray-800 mt-2">
                            1800€
                        </p>
                    </div>

                    {/* With Accommodation */}
                    <div className="text-center">
                        <div className="w-20 h-1 bg-gray-800 mx-auto mb-4"></div>
                        <h3 className="text-3xl font-bold text-gray-800 font-balgin">
                            With Accommodation
                        </h3>
                        <p className="text-6xl font-extrabold text-gray-800 mt-2">
                            3000€
                        </p>
                    </div>
                </div>

                {/* Early Bird Discount */}
                <div className="mt-16 bg-green-100 text-green-800 font-bold py-4 px-8 rounded-lg">
                    <p className="text-2xl">Early bird discount 15%</p>
                </div>
            </div>
        </Section>
    );
};

export default PricingSection;
