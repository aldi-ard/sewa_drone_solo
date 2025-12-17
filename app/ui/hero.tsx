import Image from "next/image"
import Link from "next/link"

const Hero = () => {
    return(
      <div className="relative h-screen text-white overflow-hidden pb-24 mb:4 md:pb=8">
        <div className="absolute inset-0" > 
            <Image
             src={'/background.jpg'}
             alt="hero-jpg"
             priority
             quality={90}
             sizes="(max-width:768px)100vw 1920px"
             fill className="object-cover object-center w-full h-full"
             />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-gray-900 to-transparent opacity-60"></div>
        <div className="relative flex flex-col justify-center items-center h-full mt-64 text-center md:mt-64 md:pt-30">
          <h1 className="text-2xl md:text-5xl text-balance font-extrabold leading-tight text-white text-shadow-amber-50 mb-1 md:mb-3 capitalize">jasa sewa drone solo</h1>
          <p className="text-sm md:text-base h-auto text-wrap w-full md:max-w-6xl px-6 text-white  shadow-blue-50 mb-8 md:mx-80 md:px-60 md:font-light font-extralight">
            Dokumentasikan momen pentingmu dengan pilot profesional & hasil video berkualitas tinggi. Solusi untuk event, properti, dan pemetaan.
          </p>
          <div className="flex gap-5 flex-col  md:flex-row">
            <Link href="/Priclist" className="bg-blue-500 border border-gray-500 text-white hover:bg-transparent hover:text-white hover:border-white py-2 px-4 md:px-8 text-md font-semibold hover:scale-105 hover:shadow-lg rounded-4xl capitaleze">Hubungi Kami</Link>
            <Link href="/Priclist" className="bg-tansparant border border-white text-white hover:bg-transparent hover:text-white hover:border-white py-2 px-4 md:px-8 text-md font-semibold hover:scale-105 hover:shadow-lg rounded-4xl capitaleze">cek pricelist</Link>
          </div>
        </div>
      </div>
    )
}

export default Hero