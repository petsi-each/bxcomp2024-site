'use client'
import ImageG from "@/components/ImageG";

export default function Hero() {
    return (
        <section className="flex items-center justify-center overflow-visible relative md:min-h-screen px-4 md:px-8 lg:px-16">
            <div className="w-full max-w-3xl flex justify-center mt-24 md:mt-4">
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