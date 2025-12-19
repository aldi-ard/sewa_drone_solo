import Card from './cards/cardLayanan'
import Link from 'next/link'

function Layanan() {
  return (
    <section className=' w-full h-auto p-12 bg-gray-100'>
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-center uppercase font-extrabold md:text-5xl text-2xl mt-6 mb-9'>Layanan Kami</h2>
            <p className='text-shadow-gray-800 md:mx-40 font-extralight text-center text-sm md:text-base sm:mx-24 text-balance mb-16'>Kami menyediakan layanan drone, fotografi, videografi, dan editing profesional untuk menghasilkan dokumentasi visual berkualitas tinggi bagi berbagai kebutuhan. </p>
            <div className="grid md:grid-cols-3 gap-2 sm:flex-wrap w-full s  h-auto pt-8 items-center mx-auto justify-around ">
              <Card
                  title='Paket Event'
                  description='Dokumentasi profesional untuk setiap momen penting. Kami menangkap suasana, detail, dan emosi acara secara rapi dan berkelas.'
                  image='/1.png'
              />
              <Card
                  title='Paket Lengkap'
                  description='Solusi all-in-one: video, foto, dan drone dalam satu paket terintegrasi untuk hasil maksimal tanpa ribet.'
                  image='/2.png'
              />
              <Card
                  title='Video Company Profile'
                  description='Video strategis untuk menampilkan identitas, nilai, dan profesionalisme perusahaan Anda secara meyakinkan.'
                  image='/3.png'
              />
            </div>
        </div>
        <div className="max-w-6xl mx-auto items-center flex mt-16 ">
            <button className="mx-auto bg-fuchsia-500  md:py-4 md:px-6 capitalize py-2 px-4 rounded-4xl font-semibold text-white hover:text-fuchsia-500 hover:bg-transparent hover:shadow-md">
            <Link href="/layanan" className="h-full w-full">semua layanan</Link>    
          </button>
      </div>
    </section>
  )
}

export default Layanan