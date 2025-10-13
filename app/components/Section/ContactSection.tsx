// components/ContactSection.tsx
import Section from "./Section";

interface ContactSectionProps {
    id: string;
    backgroundColor: string;
    onInView: (id: string) => void;
}

const ContactSection = ({
    id,
    backgroundColor,
    onInView,
}: ContactSectionProps) => {
    return (
        <Section id={id} backgroundColor={backgroundColor} onInView={onInView}>
            <div className="w-full text-white flex flex-col h-full">
                {/* Main Content Area */}
                <div className="flex-grow w-full max-w-6xl mx-auto px-8 py-16 md:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Column 1: Logo, Info & Socials */}
                        <div className="lg:col-span-1 space-y-6 text-left">
                            <h2 className="text-3xl font-bold font-balgin">
                                IAOI Spain
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                Our camp is designed to inspire and empower the
                                next generation of tech leaders, and we can't
                                wait to share our passion for coding with your
                                child.
                            </p>
                            <div>
                                <p className="text-gray-300">
                                    Visit our main website
                                </p>
                                <a
                                    href="#"
                                    className="text-white font-semibold underline hover:opacity-80"
                                >
                                    https://www.iaoispain.com
                                </a>
                            </div>
                            <div className="flex space-x-4">
                                {/* Instagram Icon */}
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="hover:opacity-80"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
                                    </svg>
                                </a>
                                {/* LinkedIn Icon */}
                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="hover:opacity-80"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Column 2 & 3: Contact Details */}
                        <div className="lg:col-span-2 text-left">
                            <h2 className="text-3xl font-bold font-balgin mb-4">
                                Need Help? Contact us
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-8">
                                Send us an email or give us a call today and let
                                us guide you to coding success.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-b border-gray-600">
                                <div className="py-6 pr-6 sm:border-r sm:border-gray-600">
                                    <p className="text-sm text-gray-300">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:contact@iaoispain.com"
                                        className="text-lg font-semibold underline hover:opacity-80"
                                    >
                                        contact@iaoispain.com
                                    </a>
                                </div>
                                <div className="py-6 sm:pl-6">
                                    <p className="text-sm text-gray-300">
                                        Call us
                                    </p>
                                    <a
                                        href="tel:+34931234567"
                                        className="text-lg font-semibold hover:opacity-80"
                                    >
                                        +34 931 234 567
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer Bar */}
                <div className="py-7 px-8">
                    <div className="max-w-6xl mx-auto flex justify-between items-center text-sm">
                        <p className="text-gray-300">&copy; IAOI Spain 2025</p>
                        <a
                            href="#"
                            className="text-white font-semibold underline hover:opacity-80"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ContactSection;
