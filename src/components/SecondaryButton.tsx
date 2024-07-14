'use client'

interface SecondaryButtonProps{
    title: string;
    onClick: () => void;
}

export default function SecondaryButton(props: SecondaryButtonProps) {

    return(

        <button onClick={props.onClick} className="w-auto bg-white/40 text-verdeBX border-2 border-verdeBX rounded-full px-14 py-3.5 text-xl hover:bg-[#369434] hover:text-white hover:border-[#369434] active:translate-y-0.5">
            
            {props.title}
            
        </button>

    );
}