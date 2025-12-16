import Image from "next/image"

type CardProps = {
  title: string
  image?: string
  description: string
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <div className="max-w-90 p-6 min-h-96 h-full rounded-2xl shadow-xl bg-white flex flex-col gap-4 items-start mt-4">
      
      <div className="relative md:h-70 h-42 w-full">
        {image && (
          <Image
            src={image}
            alt={title + 'image'}
            fill
            className="md:object-cover h-16 object-center rounded-2xl"
          />
        )}
      </div>

      <div className="w-full text-xl font-semibold text-center">
        <h2 className="sm:text-base md:text-2xl leading-relaxed">{title}</h2>
      </div>

      <div className="mt-auto w-full text-sm  font-light md:min-h-52 min-h-40 text-black md:text-gray-600">
        <p className="text-sm md:text-md leading-relaxed ">{description}</p>
      </div>

    </div>
  )
}