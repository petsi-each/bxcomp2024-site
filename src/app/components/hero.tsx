'use client'
import ImageG from "@/components/ImageG";

export default function Hero() {
    return (
        <section className="flex items-center justify-center overflow-visible relative md:min-h-[calc(100vh-74px)] pb-8 md:pb-12 lg:pb-16 px-4 md:px-8 lg:px-16">
            <div className="w-full max-w-3xl flex justify-center transform translate-y-28 md:translate-y-0">
                <ImageG 
                    className="w-full h-auto" 
                    src="/home/logobxcomp.png" 
                    alt="Logo do BXCOMP"
                    width={725} 
                    height={490} 
                />
            </div>
        </section>
    );
}