import { latoRegular } from "@/fonts"
import { twMerge } from "tailwind-merge"

export const ButtonApp = ({title, className}: {title:string, className?: string}) => {
    return(
        <button className={twMerge("bg-themeDark rounded-lg", className)}>
            <p className={twMerge(latoRegular.className, "text-themeWhite text-sm mx-5 my-3")}>{title}</p>
        </button>
    )
}