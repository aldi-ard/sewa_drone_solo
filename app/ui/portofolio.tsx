"use client"

import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
// import ImagePortofolioCard from './cards/imagePortofolioCard'

const images = [
  {
    img : "/portofolio/1.png",
    alt : "image"
  },
  {
    img : "/portofolio/2.png",
    alt : "image"
  },
  {
    img : "/portofolio/3.png",
    alt : "image"
  },
  {
    img : "/portofolio/4.png",
    alt : "image"
  },
  {
    img : "/portofolio/5.png",
    alt : "image"
  },
  {
    img : "/portofolio/6.png",
    alt : "image"
  },
  {
    img : "/portofolio/7.png",
    alt : "image"
  },
  {
    img : "/portofolio/8.png",
    alt : "image"
  },
];

function Portofolio() {
  return (
    <section className=' w-full h-auto p-12 bg-gray-100'>
        <div className='max-w-6xl mx-auto'>
            <div className="header text-center pb-20">
                <h1 className='text-5xl font-bold'>Portofolio</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
              <video className='w-80 rounded-2xl ' autoPlay muted controls src="/portofolio/video1.mp4"></video>
              <video className='w-80 rounded-2xl h-full' autoPlay muted controls src="/portofolio/video2.mp4"></video>
              <video className='w-80 rounded-2xl h-full' autoPlay muted controls src="/portofolio/video3.mp4"></video>
            </div>
            <div className="relative bg-gray-100 max-h-1/6 pt-16 overflow-hidden">
                {/* GRADIENT bawah */}
                <div className="pointer-events-none absolute bottom-0 h-52 w-full md:w-full bg-linear-to-t from-gray-100 to-transparent z-10" />
                {/* GRADIENT KANAN */}
                {/* <div className="pointer-events-none absolute right-0 top-0 h-full   w-12 md:w-48  bg-linear-to-l from-gray-100 to-transparent z-10" /> */}
                <div className="">
                <Swiper
                  modules={[Autoplay]}
                  loop
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  spaceBetween={30}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                  }}
                >
                  {images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="relative h-96 w-72 mx-auto">
                        <Image
                          src={img.img}
                          alt={`portfolio-${i}`}
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                </div>
            </div>
            <div className="header text-center flex items-center py-2">
              <Link href="https://www.instagram.com/drone_solo/" className='mx-auto  flex items-center' >
                <h2 className='bg-fuchsia-500 w-60 p-4 font-semibold capitalize rounded-4xl hover:bg-fuchsia-600 text-white'>view on instagram</h2>
              </Link>
            </div>
                
            </div>
        </section>
  )
}

export default Portofolio