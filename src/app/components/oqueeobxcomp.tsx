'use client'

import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import ImageG from "@/components/ImageG";

export default function oqueeobxcomp() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#031621]">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <ImageG 
                    src="/home/sobrebx.png" 
                    alt="Logo do BX"
                    quality={100}
                    priority
                    width={1154}
                    height={875} 
                    style={{ objectFit: 'contain' }} 
                />
            </div>

            {/* Text Balloon */}
            <div className="relative z-10 max-w-lg p-8 bg-white bg-opacity-80 rounded-2xl shadow-lg backdrop-blur-sm text-center">
                <h2 className="text-2xl text-orange-600 mb-4">O que é BXCOMP?</h2>
                <p className="text-black mb-6">
                    O BXComp é o Campeonato de Programação para Calouros do Curso de Sistemas de Informação organizado pelo PET-SI. Seu objetivo é criar um ambiente divertido e desafiador, composto por atividades de resolução de problemas usando programação.
                </p>
                <div className="flex justify-center space-x-4">
                    <PrimaryButton title="Saiba mais" onClick={() => location.replace("/saibamais")} />
                    <SecondaryButton title="Regulamento" onClick={() => location.replace("/regulamento")} />
                </div>
            </div>
        </section>
    );
}
