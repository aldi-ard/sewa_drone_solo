import Image from "next/image"

type CardProps = {
  title: string
  logo: string
  description: string
}


function cardSosmed({title, logo, description} : CardProps) {
  return (
    <div className="max-w-90 p-6 min-h-96 h-full rounded-2xl shadow-xl bg-white flex flex-col gap-4 items-start mt-4">
      
      <div className="relative h-70 w-full">
            <Image
            src={logo}
            alt={{title} + 'image'}
            className="w-full"
            ></Image>
      </div>

      <div className="w-full text-xl font-semibold text-center">
        <h2>{title}</h2>
      </div>

      <div className="mt-auto w-full text-sm min-h-46 font-extralight text-gray-800">
        <p>{description}</p>
      </div>

    </div>
  )
}

export default cardSosmed