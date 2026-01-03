import Image from 'next/image'

function AboutUs() {
  return (
      <section className=' w-full h-auto p-12 bg-gray-100'>
        <div className=' flex text-center justify-center items-center'>
          <h1 className='text-center text-2xl md:text-5xl font-bold'>About Us</h1>
        </div>
        <div className="flex max-w-6xl flex-col md:flex-row justify-center m-auto">
          <div className="flex flex-col md:flex-row ">
            <div className="w-80 min-h-96 rounded-2xl relative">
              <Image
              fill
              src={'/1.png'}
              alt='aboutus'
              className='h-90 w-90'
              ></Image>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutUs