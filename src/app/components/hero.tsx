'use client'
import ImageG from "@/components/ImageG";

export default function Hero() {
    return (
        <section className="flex items-center justify-center overflow-visible relative md:min-h-screen px-4 md:px-8 lg:px-16">
            <div className="max-w-3xl flex justify-center mt-24 md:mt-4">
                <ImageG 
                    className="w-full sm:w-96 md:w-4/5 lg:w-full h-auto scale-110 sm:scale-150" 
                    src="/logoBxcomp.svg" 
                    alt="Logo do BXCOMP"
                    width={875} 
                    height={625} 
                />
            </div>
        </section>
    );
}