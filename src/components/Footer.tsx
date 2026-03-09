import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(textRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 80%",
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer ref={footerRef} className="py-24 px-6 md:px-12 lg:px-24 bg-black text-white w-full relative z-30 overflow-hidden rounded-t-[3rem] border-t border-gray-900">
            <div className="flex flex-col items-center justify-center text-center mb-20 md:mb-32">
                <p className="text-gray-400 tracking-widest uppercase text-sm font-semibold mb-6">Have an idea?</p>
                <h2 ref={textRef} className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-none interactable hover:text-gray-300 transition-colors cursor-pointer">
                    Let's Talk
                </h2>
                <a href="mailto:vedantjadhav1414@gmail.com" className="mt-12 text-2xl md:text-4xl font-serif italic border-b border-gray-700 pb-2 hover:border-white transition-colors interactable">
                    vedantjadhav1414@gmail.com
                </a>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800/50">
                <div className="flex gap-8 mb-6 md:mb-0">
                    <a href="https://linkedin.com/in/vedantjadhav-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors interactable text-sm font-semibold uppercase tracking-wider">LinkedIn</a>
                    <a href="https://github.com/VedantJadhav701" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors interactable text-sm font-semibold uppercase tracking-wider">GitHub</a>
                </div>

                <div className="flex items-center gap-8">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Vedant Sanjay Jadhav. All rights reserved.</p>
                    <button onClick={scrollToTop} className="interactable text-gray-400 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider hidden md:block">
                        Back to Top ↑
                    </button>
                </div>
            </div>
        </footer>
    );
}
