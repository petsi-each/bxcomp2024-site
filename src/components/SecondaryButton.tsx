'use client'

interface SecondaryButtonProps{
    title: string;
    onClick: () => void;
}

export default function SecondaryButton(props: SecondaryButtonProps) {

    return(

        <button onClick={props.onClick} className="w-auto bg-white/40 text-verdeBX border-2 border-verdeBX rounded-full px-14 py-3.5 text-xl">
            
            {props.title}
            
        </button>

    );
}