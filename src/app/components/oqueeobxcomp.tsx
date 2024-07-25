'use client'

import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import ImageG from "@/components/ImageG";


export default function oqueeobxcomp() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[pretoBX]">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <ImageG src="/home/sobrebx.png" alt="Logo do BX" quality={100} priority width={1154} height={875} style={{ objectFit: 'contain' }} />
            </div>

            {/* Text Balloon */}
            <div className="relative z-10 max-w-4xl p-8 md:p-16 lg:p-24 bg-white bg-opacity-90 rounded-[50px] md:rounded-[100px] lg:rounded-[125px] shadow-lg text-center flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-laranjaBX mb-4">O que é BXCOMP?</h2>
                <p className="text-base md:text-lg lg:text-xl text-black mb-6 font-pop">
                    O BXComp é o Campeonato de Programação para Calouros do Curso de Sistemas de Informação organizado pelo PET-SI. Seu objetivo é criar um ambiente divertido e desafiador, composto por atividades de resolução de problemas usando programação.
                </p>
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">                   
                    <PrimaryButton title="Saiba mais" onClick={() => location.replace("/saibamais")} />
                    <SecondaryButton title="Regulamento" onClick={() => location.replace("/regulamento")} />
                </div>
            </div>
        </section>
    );
}
