'use client'
import ImageG from "@/components/ImageG";
import { VscArrowCircleDown } from "react-icons/vsc";
export default function Hero() {
    return (
        <section className="flex -mt-24 items-center justify-center relative h-screen">

                <ImageG 
                    className="" 
                    src="/logoBxcomp.svg" 
                    alt="Logo do BXCOMP"
                    fill={true}
                />

            <VscArrowCircleDown className="text-brancoBX w-10 h-10 absolute bottom-2 md:w-16 md:h-16 animate-bounce justify-center" />

        </section>


    );
}