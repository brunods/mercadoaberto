import { SVGProps } from "react";

export default function CloseIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M3 21.32L21 3.32001" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 3.32001L21 21.32" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
}
