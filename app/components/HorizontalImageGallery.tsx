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
    // Duplicate enough times to cover animation reset (3x or more is safe)
    const repeatCount = 4;
    const duplicatedImages = Array.from(
        { length: repeatCount },
        () => images
    ).flat();

    return (
        <div
            className={`w-full ${heightClassName} ${backgroundColorClassName} overflow-hidden relative`}
        >
            <motion.div
                className="flex absolute left-0 top-0 h-full items-center"
                animate={{
                    x: ["0%", `-${(100 / repeatCount) * (repeatCount - 1)}%`],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration,
                        ease: "linear",
                    },
                }}
                style={{
                    width: `${repeatCount * 100}%`,
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
