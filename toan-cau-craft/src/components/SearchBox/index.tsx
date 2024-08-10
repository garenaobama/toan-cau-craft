import { Icons } from "@/icons"
import Image from "next/image"
import { twMerge } from 'tailwind-merge'

export const SearchBox = ({className} : {className?:string}) =>{
    return(
        <div className={twMerge("relative shadow-sm", className)}>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span><Image alt="arrow icon" src={Icons.SearchNormal} /></span>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-full border-0 py-1.5 pl-10 text-textPrimary ring-1 ring-inset focus:ring-inputPrimary ring-inputSecondary placeholder:text-textSecondary sm:text-sm sm:leading-6"
            placeholder="Search"
          />
        </div>
    )
}