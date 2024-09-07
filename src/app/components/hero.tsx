'use client'

import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex items-center justify-center overflow-visible relative md:min-h-screen px-4 md:px-8 lg:px-16">
            <div className="w-full max-w-3xl flex justify-center mt-24 md:mt-4">
                <Image 
                    className="w-full h-auto scale-110 sm:scale-150" 
                    src="/logoBxcomp.svg" 
                    alt="Logo do BXCOMP"
                    width={1400} 
                    height={1000} 
                />
            </div>
        </section>
    );
}