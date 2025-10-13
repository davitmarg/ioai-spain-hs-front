"use client";

import { motion } from "framer-motion";

interface HorizontalImageGalleryProps {
    images: string[];
    duration?: number;
    heightClassName?: string;
    backgroundColorClassName?: string;
}

const HorizontalImageGallery = ({
    images,
    duration = 30,
    heightClassName = "h-80",
    backgroundColorClassName = "bg-transparent",
}: HorizontalImageGalleryProps) => {
    // Duplicate images to create a seamless infinite scroll effect
    const duplicatedImages = [...images, ...images];

    return (
        <div
            className={`w-full ${heightClassName} ${backgroundColorClassName} overflow-hidden relative`}
        >
            <motion.div
                className="flex absolute left-0 top-0 h-full items-center"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: duration,
                        ease: "linear",
                    },
                }}
                style={{
                    width: "200%", // two sets side by side
                }}
            >
                {duplicatedImages.map((src, index) => (
                    <div
                        key={index}
                        className={`
                            h-3/4
                            aspect-square
                            mx-4
                            overflow-hidden
                            flex-shrink-0
                            ${
                                index % 2 === 0
                                    ? "rounded-[20%]"
                                    : "rounded-full"
                            }
                        `}
                    >
                        <img
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default HorizontalImageGallery;
