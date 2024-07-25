'use client'
import ImageG from "@/components/ImageG";

export default function Hero() {
    return (
        <section className="flex items-center justify-center relative overflow-hidden min-h-[calc(100vh-74px)] pb-16 px-4 md:px-8 lg:px-16">
            <div className="w-full max-w-3xl flex justify-center">
                <ImageG 
                    className="w-full h-auto max-w-full" 
                    src="/home/logobxcomp.png" 
                    priority 
                    alt="Logo do BXCOMP"
                    width={725} 
                    height={490} 
                />
            </div>
        </section>
    );
}