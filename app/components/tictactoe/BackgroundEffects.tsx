"use client";

import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
    const lightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const moveLight = (e: MouseEvent) => {
            const card = document.getElementById("game-card");

            if (!lightRef.current) return;

            if (card) {
                const rect = card.getBoundingClientRect();

                const insideCard =
                    e.clientX >= rect.left &&
                    e.clientX <= rect.right &&
                    e.clientY >= rect.top &&
                    e.clientY <= rect.bottom;

                if (insideCard) {
                    lightRef.current.style.opacity = "0";
                    return;
                }
            }

            lightRef.current.style.opacity = "1";

            lightRef.current.style.transform = `
        translate(
          ${e.clientX - 200}px,
          ${e.clientY - 200}px
        )
      `;
        };

        window.addEventListener("mousemove", moveLight);

        return () => {
            window.removeEventListener("mousemove", moveLight);
        };
    }, []);

    return (
        <>
            {/* GRID */}
            <div
                className="
    absolute inset-0
    opacity-100
    pointer-events-none
  "
                style={{
                    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
    `,
                    backgroundSize: "42px 42px",
                }}
            />

            {/* RADIAL LIGHT */}
            <div
                ref={lightRef}
                className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-[400px]
          w-[400px]
          rounded-full
          opacity-0
          blur-3xl
          transition-transform
          duration-75
        "
                style={{
                    background:
                        "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 35%, transparent 70%)",
                }}
            />


        </>
    );
}