'use client'

import { PiRocketLaunchDuotone } from "react-icons/pi";
import { useId } from 'react';

interface PrimaryButtonProps{
    title: string;
    onClick: () => void;
}

export default function PrimaryButton(props: PrimaryButtonProps) {

    const buttonId = useId();

    return(

        <button title={props.title} aria-labelledby={buttonId} onClick={props.onClick} className="w-auto bg-verdeBX text-white rounded-full px-8 py-4 flex flex-row place-content-center items-center text-xl hover:bg-[#369434] active:translate-y-0.5">

            <PiRocketLaunchDuotone size={28} />

            <div id={buttonId} className="px-4">
                {props.title}
            </div>

        </button>
        
    );
}