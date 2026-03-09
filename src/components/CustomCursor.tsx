import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursor || !cursorDot) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        let cursorX = mouseX;
        let cursorY = mouseY;

        // Follow mouse
        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Instantly move the small dot
            gsap.set(cursorDot, {
                x: mouseX,
                y: mouseY,
            });
        };

        // Smoothly move the outer circle
        const render = () => {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;

            gsap.set(cursor, {
                x: cursorX,
                y: cursorY,
            });

            requestAnimationFrame(render);
        };

        window.addEventListener('mousemove', onMouseMove);
        requestAnimationFrame(render);

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, input, .interactable')) {
                gsap.to(cursor, { scale: 1.5, opacity: 0.5, duration: 0.3 });
                gsap.to(cursorDot, { scale: 0, duration: 0.3 });
            }
        };

        const onMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, input, .interactable')) {
                gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
                gsap.to(cursorDot, { scale: 1, duration: 0.3 });
            }
        };

        document.body.addEventListener('mouseover', onMouseOver);
        document.body.addEventListener('mouseout', onMouseOut);

        // Hide default cursor
        document.body.style.cursor = 'none';

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.body.removeEventListener('mouseover', onMouseOver);
            document.body.removeEventListener('mouseout', onMouseOut);
            document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[9999] -ml-4 -mt-4 mix-blend-difference"
            ></div>
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] -ml-[3px] -mt-[3px] mix-blend-difference"
            ></div>
        </>
    );
}
