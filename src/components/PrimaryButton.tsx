'use client'

import { PiRocketLaunchDuotone } from "react-icons/pi";

interface PrimaryButtonProps{
    title: string;
    onClick: () => void;
}

export default function PrimaryButton(props: PrimaryButtonProps) {

    return(

        <button onClick={props.onClick} className="w-full bg-verdeBX text-white rounded-full px-8 py-4 flex flex-row place-content-center items-center text-xl hover:bg-[#369434] active:translate-y-0.5">

            <PiRocketLaunchDuotone size={28} />

            <div className="px-4">
                {props.title}
            </div>

        </button>
        
    );
}