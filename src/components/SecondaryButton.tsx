'use client'

import { useId } from 'react';

interface SecondaryButtonProps{
    title: string;
    onClick: () => void;
}

export default function SecondaryButton(props: SecondaryButtonProps) {

    const buttonId = useId();

    return(

        <button title={props.title} id={buttonId} aria-labelledby={buttonId} onClick={props.onClick} className="w-auto bg-white/40 text-verdeBX border-2 border-verdeBX rounded-full px-12 py-4 text-xl hover:bg-[#369434] hover:text-white hover:border-[#369434] active:translate-y-0.5">
            
            {props.title}
            
        </button>

    );
}