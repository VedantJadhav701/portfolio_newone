import InfiniteGallery from "@/components/ui/3d-gallery-photography";

export default function DemoOne() {
    const sampleImages = [
        { src: '/code4society_1st.jpeg', alt: 'Code4Society 1st Place' },
        { src: '/devcraft_3rd.jpeg', alt: 'DevCraft Hackathon 3rd Place' },
        { src: '/screenshot_1.png', alt: 'Screenshot 1' },
        { src: '/code4society_1st.jpeg', alt: 'Code4Society 1st Place' },
        { src: '/devcraft_3rd.jpeg', alt: 'DevCraft Hackathon 3rd Place' },
        { src: '/screenshot_1.png', alt: 'Screenshot 1' },
    ];

    return (
        <section className="relative w-full h-screen bg-black z-20 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <InfiniteGallery
                    images={sampleImages}
                    speed={1.2}
                    zSpacing={3}
                    visibleCount={12}
                    falloff={{ near: 0.8, far: 14 }}
                    className="w-full h-full"
                />
            </div>

            {/* Centered Silver Text Overlay */}
            <h2
                className="absolute z-10 pointer-events-none mix-blend-difference text-center text-6xl md:text-10xl text-transparent bg-clip-text font-serif italic font-bold m-0 p-0 leading-none px-4"
                style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontFamily: "'Great Vibes', cursive",
                    backgroundImage: "linear-gradient(to right, #B0B0B0 0%, #FFFFFF 50%, #B0B0B0 100%)",
                    filter: "drop-shadow(0px 2px 12px rgba(255,255,255,0.28))"
                }}
            >
                My Gallery
            </h2>

        </section>
    );
}
