import Image from "next/image"

type CardProps = {
  title: string
  image?: string
  description: string
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="w-86 p-6 min-h-96 h-full rounded-2xl shadow-xl bg-white flex flex-col gap-4 items-start mt-4">
      
      <div className="relative h-70 w-full">
        {image && (
          <Image
            src={image}
            alt={'${title} image'}
            fill
            className="object-cover object-center rounded-2xl"
          />
        )}
      </div>

      <div className="w-full text-xl font-semibold text-center">
        <h2>{title}</h2>
      </div>

      <div className="mt-auto w-full text-sm font-extralight text-gray-800">
        <p>{description}</p>
      </div>

    </div>
  )
}