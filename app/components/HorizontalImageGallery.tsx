"use client";

import { useEffect, useRef, useState } from "react";

interface HorizontalImageGalleryProps {
    images: string[];
    duration?: number;
    heightClassName?: string;
    backgroundColorClassName?: string;
}

interface Item {
    id: number;
    imageIndex: number;
    left: number;
    isRoundedFull: boolean;
}

const HorizontalImageGallery = ({
    images,
    duration = 10,
    heightClassName = "h-80",
    backgroundColorClassName = "bg-transparent",
}: HorizontalImageGalleryProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [items, setItems] = useState<Item[]>([]);
    const itemCounterRef = useRef(0);
    const animationRef = useRef<number | null>(null);
    const speedRef = useRef(0);
    const nextRoundedRef = useRef(false); // 0 or 1 style alternator

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const containerWidth = container.offsetWidth;

        // Measure one item's width
        const tempDiv = document.createElement("div");
        tempDiv.className = "h-3/4 aspect-square mx-4 flex-shrink-0";
        container.appendChild(tempDiv);
        const itemWidth = tempDiv.offsetWidth + 16;
        container.removeChild(tempDiv);

        speedRef.current = itemWidth / duration / 60;

        // Initialize items to fill container
        const initialCount = Math.ceil(containerWidth / itemWidth) + 2;
        const initialItems: Item[] = Array.from(
            { length: initialCount },
            (_, i) => {
                const rounded = nextRoundedRef.current;
                nextRoundedRef.current = !nextRoundedRef.current; // flip for next
                return {
                    id: i,
                    imageIndex: i % images.length,
                    left: i * itemWidth,
                    isRoundedFull: rounded,
                };
            }
        );

        setItems(initialItems);
        itemCounterRef.current = initialCount;

        const animate = () => {
            setItems((prev) => {
                const newItems = prev
                    .map((item) => ({
                        ...item,
                        left: item.left - speedRef.current,
                    }))
                    .filter((item) => item.left + itemWidth > 0);

                const lastItem = newItems[newItems.length - 1];
                if (lastItem && lastItem.left + itemWidth < containerWidth) {
                    const id = itemCounterRef.current++;
                    const rounded = nextRoundedRef.current;
                    nextRoundedRef.current = !nextRoundedRef.current; // flip for next
                    newItems.push({
                        id,
                        imageIndex: id % images.length,
                        left: lastItem.left + itemWidth,
                        isRoundedFull: rounded,
                    });
                }

                return newItems;
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current)
                cancelAnimationFrame(animationRef.current);
        };
    }, [images, duration]);

    return (
        <div
            className={`w-full ${heightClassName} ${backgroundColorClassName} overflow-hidden relative`}
            ref={containerRef}
        >
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`h-3/4 aspect-square mx-4 overflow-hidden flex-shrink-0 ${
                        item.isRoundedFull ? "rounded-full" : "rounded-[20%]"
                    }`}
                    style={{
                        position: "absolute",
                        top: "50%",
                        transform: `translateY(-50%)`,
                        left: `${item.left}px`,
                    }}
                >
                    <img
                        src={images[item.imageIndex]}
                        alt={`Gallery image ${item.imageIndex + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default HorizontalImageGallery;
