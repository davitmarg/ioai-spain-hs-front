"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
    src: string;
    alt?: string;
    // Use Tailwind classes for positioning and sizing (e.g., "w-1/4 top-10 left-20")
    className?: string;
    // Set to true to enable the parallax effect
    enableParallax?: boolean;
    // Controls the speed and direction of the parallax effect.
    // Positive value: "outwards" parallax (moves faster than scroll).
    // Negative value: "inwards" parallax (moves slower than scroll).
    parallaxStrength?: number;
}

const ParallaxImage = ({
    src,
    alt = "Parallax Image",
    className = "",
    enableParallax = false,
    parallaxStrength = 200,
}: ParallaxImageProps) => {
    // A ref to the wrapping div to track its position for the parallax effect
    const ref = useRef(null);

    // useScroll tracks the scroll progress of the target element (the div)
    const { scrollYProgress } = useScroll({
        target: ref,
        // The effect starts when the top of the element hits the bottom of the viewport
        // and ends when the bottom of the element hits the top of the viewport.
        offset: ["start end", "end start"],
    });

    // useTransform maps the scroll progress (from 0 to 1) to a vertical movement (translateY)
    // The parallaxStrength determines how much the image moves.
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [-parallaxStrength, parallaxStrength]
    );

    return (
        <motion.div
            ref={ref}
            // The className prop is used to position and size the image container
            className={`absolute ${className}`}
            // The style prop applies the parallax effect if it's enabled
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
