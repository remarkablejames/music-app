'use client'
import cn from "clsx";
import Image from "next/image";
import {useState} from "react";

export default function BlurImage(props: any) {
    const [isLoading, setLoading] = useState(true);

    return (
        <Image
            {...props}
            alt={props.alt}
            className={cn(
                props.className,
                "duration-700 ease-in-out",
                isLoading ? "blur-xs animate-pulse" : "blur-0 animate-none"
            )}
            onLoadingComplete={() => setLoading(false)}
        />
    );
}
