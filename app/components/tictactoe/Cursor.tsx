import { useEffect, useRef, type ReactNode } from "react";

type CursorProps = {
    children?: ReactNode;
};

function Cursor({ children }: CursorProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            // Tracks the mouse relative to the entire viewport/document
            const x = e.clientX;
            const y = e.clientY;

            containerRef.current.style.setProperty("--mouse-x", `${x}px`);
            containerRef.current.style.setProperty("--mouse-y", `${y}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative min-h-screen w-full bg-black text-white overflow-x-hidden"
        >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40" />

            <div className="pointer-events-none fixed inset-0 z-30 bg-[radial-gradient(1000px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(255,255,255,0.06),transparent_70%)]" />

            <main className="relative z-10 w-full">
                {children}
            </main>
        </div>
    );
}

export default Cursor;