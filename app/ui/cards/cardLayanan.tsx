import Image from "next/image"
import { ITCAvanatGardeStd, ITCAvanatGardeStdLight } from "@/app/style/fonts"
type CardProps = {
  title: string
  image?: string
  description: string
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="min-h-auto h-auto rounded-2xl mx-1 shadow-xl bg-gray-100 flex flex-col gap-2 items-start mt-4">
      
      <div className="relative aspect-3/4 min-h-75 w-full">
        {image && (
          <Image
            src={image}
            alt={title + 'image'}
            fill
            className="md:object-cover h-auto object-center rounded-t-2xl"
          />
        )}
      </div>

      <div className="w-full text-xl px-6  font-semibold text-center">
        <h2 className={` ${ITCAvanatGardeStd.className} sm:text-base text-start md:text-2xl leading-relaxed`}>{title}</h2>
      </div>

      <div className="mt-auto w-full text-sm px-6 md:min-h-20 min-h-20 text-black md:text-gray-600">
        <p className={ `${ITCAvanatGardeStdLight.className} text-sm md:text-md leading-relaxed `}>{description}</p>
      </div>

    </div>
  )
}