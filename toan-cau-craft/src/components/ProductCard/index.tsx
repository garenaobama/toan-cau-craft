import { cormorantMedium, latoRegular } from "@/fonts"
import Image from "next/image"
import { twMerge } from "tailwind-merge"

type ProductCardProps= {
    src:string,
    category:string,
    name:string,
    className?:string
}

export const ProductCard = ({src,category,name, className}: ProductCardProps) =>{
    return(
        <div className={twMerge("",className)}>
            <div className="h-80 w-full overflow-hidden relative">
                <Image fill objectFit="cover" src={src} alt="product image"/>
            </div>
            <div className="mt-4">
                <p className={twMerge(cormorantMedium.className, "text-textPrimary text-xl")}>{name}</p>
                <p className={twMerge(latoRegular.className, "text-textSecondary text-sm")}>{category}</p>
            </div>
        </div>
    )
}