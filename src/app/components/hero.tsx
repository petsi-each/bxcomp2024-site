'use client'

import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import ImageG from "@/components/ImageG";

export default function Hero() {
    return (
        <section className="flex place-content-center relative overflow-hidden min-h-[calc(100vh-74px)] pb-16">
            <div className="lg:col-span-3 w-full flex justify-center">
                <ImageG 
                    className="w-112 md:w-192 h-fit" 
                    src="/home/logobxcomp.png" 
                    priority 
                    alt="Logo do BXCOMP"
                    width={725} // ajuste para a largura desejada
                    height={490} // ajuste para a altura desejada
                />
            </div>
        </section>
    );
}