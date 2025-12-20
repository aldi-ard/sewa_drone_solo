import React from 'react'
import Image from "next/image";

type ImagePortofolioCardProps = {
    image : string,
    alt : string
};

function ImagePortofolioCard({image, alt}: ImagePortofolioCardProps) {
  return ( 
    <div className="bg-white rounded-2xl shadow-lg w-80 md:h-50 h-40 md:w-80 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ">
        <Image src={image} className='rounded-2xl object-cover' alt={alt} fill />
    </div>
  )
}

export default ImagePortofolioCard


