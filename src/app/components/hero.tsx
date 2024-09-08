'use client'
import ImageG from "@/components/ImageG";
import { VscArrowCircleDown } from "react-icons/vsc";
export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center relative md:min-h-screen px-4 md:px-8 lg:px-16">
            
            <div className="w-full flex h-60 overflow-x-hidden justify-center object-center mt-24 md:mt-0">
                <ImageG 
                    className="w-full h-auto static pr-6 pb-36" 
                    src="/logoBxcomp.svg" 
                    alt="Logo do BXCOMP"
                    fill={true}
                />
            </div>

            <div className="block pt-20">
            <VscArrowCircleDown className="text-brancoBX w-16 h-16 animate-bounce justify-center" />
            </div>

        </section>


    );
}