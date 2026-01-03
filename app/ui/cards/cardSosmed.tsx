import { ReactNode } from "react"
import Link from "next/link"
import { ITCAvanatGardeStd, ITCAvanatGardeStdLight } from "@/app/style/fonts"

type CardProps = {
  title: string;
  logo : ReactNode;
  description: string;
  color?: string;
  bgcolor?: string;
  link: string;
  cta: string;
}

function CardSosmed({title, logo, description, color, bgcolor, link,cta}: CardProps) {
  return (
    <div className="max-w-90 md:w-76 p-6 min-h-4 rounded-2xl shadow-xl bg-white flex flex-col gap-4 items-center mt-4">
      <div className={`relative h-16  ${color}`} >
        {logo}
      </div>
      <div className="w-full text-xl font-semibold text-center">
        <h2>{title}</h2>
      </div>

      <div className={`mt-auto w-full text-sm text-center min-h-10 font-extralight text-gray-800 ${ITCAvanatGardeStdLight.className}`}>
        <p>{description}</p>
      </div>
      <div className="mt-auto w-full text-sm mx-auto min-h-10 font-extralight text-gray-800">
        <Link
        href={link}
        >
          <button className={`h-12 px-12 mx-auto w-full rounded-3xl text-white font-semibold ${bgcolor}`}>{cta}</button>
        </Link>
      </div>

    </div>
  )
}

export default CardSosmed