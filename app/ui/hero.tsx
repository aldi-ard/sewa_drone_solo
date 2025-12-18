import Image from "next/image"
import Link from "next/link"

const Hero = () => {
    return(
      <div className="relative h-screen text-white overflow-hidden pb-24 mb:4 md:pb=8">
        <div className="absolute inset-0" > 
            <Image
             src='/bcg.JPG'
             alt="hero-jpg"
             priority
             quality={90}
             sizes="(max-width:768px)100vh 1920px"
             fill className="object-cover object-center w-full h-full"
             />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-bg-transparent to-gray-600 opacity-100"></div>
        <div className="relative flex flex-col justify-start items-center h-full mt-56 text-center md:mt-28 md:pt-30">
          <h1 className="text-2xl md:text-5xl text-balance font-extrabold leading-tight text-white text-shadow-amber-50 mb-1 md:mb-3 capitalize">Jasa Sewa Drone<br /> Videografer dan Fotografer Solo</h1>
          <p className="text-sm md:text-base h-auto text-wrap w-full md:max-w-6xl px-6 text-white  shadow-blue-50 mb-8 md:mx-80 md:px-60 md:font-light font-extralight">
            Dokumentasi Drone | Event | Company Profile | Perpisahan Sekolah | Wedding <br />| Pemetaan Lahan | Video Marketing
          </p>
          <div className="flex gap-5 flex-col  md:flex-row">
            <Link href="/contact" className="bg-fuchsia-600 border border-gray-500 text-white hover:bg-transparent hover:text-white hover:border-white py-4 px-4 md:px-8 text-md font-extrabold hover:scale-105 hover:shadow-lg rounded-4xl capitaleze">Hubungi Kami</Link>
            <Link href="/pricelist" className="bg-white border border-white text-black hover:bg-transparent hover:text-white hover:border-white py-4 px-4 md:px-8 text-md  hover:scale-105 hover:shadow-lg rounded-4xl capitaleze font-extrabold">Pricelist</Link>
          </div>
        </div>
      </div>
    )
}

export default Hero