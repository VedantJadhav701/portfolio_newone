import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Trophy, Award, Medal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const achievements = [
    {
        id: 1,
        title: "Winner (1st Place) - Code4Society Hackathon",
        institution: "Pimpri Chinchwad University",
        year: "2026",
        description: "Built 'EcoGuard', an AI-Powered Carbon Intelligence Platform using multimodal ML data over 3 intense days.",
        icon: <Trophy className="w-6 h-6 text-yellow-500" />
    },
    {
        id: 2,
        title: "Third Place - National DevCraft Hackathon",
        institution: "Fluxus 2025, IIT Indore",
        year: "2025",
        description: "Demonstrated advanced technical problem-solving and innovation in a competitive national-level environment.",
        icon: <Medal className="w-6 h-6 text-gray-300" />
    },
    {
        id: 3,
        title: "Best Research Paper Award",
        institution: "ICCTVB-25",
        year: "2025",
        description: "Recognized for work on Ensemble and Hybrid ML Approaches for Renewable Energy Forecasting.",
        icon: <Award className="w-6 h-6 text-yellow-600" />
    }
];

export default function Achievements() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".ach-header",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );

            if (cardsRef.current) {
                gsap.fromTo(
                    cardsRef.current.children,
                    { opacity: 0, y: 50, scale: 0.95 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: cardsRef.current,
                            start: "top 75%",
                        }
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 bg-black text-white w-full relative z-30 border-t border-gray-900">
            <div className="text-center mb-16 md:mb-24 ach-header">
                <p className="text-gray-400 uppercase tracking-widest text-sm mb-4 font-semibold">Honors & Awards</p>
                <h2 className="text-5xl md:text-6xl font-bold font-serif italic">Achievements</h2>
            </div>

            <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((item) => (
                    <div
                        key={item.id}
                        className="interactable bg-[#111111] p-8 rounded-2xl border border-gray-800 hover:border-gray-500 transition-colors duration-500 group relative overflow-hidden"
                    >
                        {/* Subtle gradient glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <div className="flex justify-between items-center mb-4 text-sm font-serif italic">
                            <span className="text-gray-400">{item.institution}</span>
                            <span className="text-gray-500">{item.year}</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
