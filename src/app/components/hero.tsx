'use client'
import ImageG from "@/components/ImageG";

export default function Hero() {
    return (
        <section className="flex items-center justify-center relative md:min-h-screen px-4 md:px-8 lg:px-16">
            <div className="w-full flex overflow-x-hidden justify-center mt-24 md:mt-4">
                <ImageG 
                    className="w-full h-auto scale-110" 
                    src="/logoBxcomp.svg" 
                    alt="Logo do BXCOMP"
                    fill={true}
                />
            </div>
        </section>
    );
}