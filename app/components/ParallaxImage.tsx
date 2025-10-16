"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
    src: string;
    alt?: string;
    className?: string; // Tailwind classes
    enableParallax?: boolean;
    parallaxStrength?: number;
}

const ParallaxImage = ({
    src,
    alt = "Parallax Image",
    className = "",
    enableParallax = false,
    parallaxStrength = 200,
}: ParallaxImageProps) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [-parallaxStrength, parallaxStrength]
    );

    return (
        <motion.div
            ref={ref}
            // ⬇️ No absolute positioning here anymore
            className={`relative overflow-hidden ${className}`}
            style={{ y: enableParallax ? y : 0 }}
        >
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover rounded-lg shadow-lg"
            />
        </motion.div>
    );
};

export default ParallaxImage;
