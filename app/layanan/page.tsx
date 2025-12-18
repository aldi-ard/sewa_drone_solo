import Card from "../ui/cards/cardLayanan"

function page() {
  return (
    <section className=' w-full h-auto p-12 bg-white'>
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-center uppercase font-extrabold md:text-4xl text-3xl mt-24 mb-9'>Layanan Kami</h2>
            <p className='text-gray-800 md:mx-40 font-medium text-center sm:mx-24 text-sm md:text-base text-balance mb-6 md:mb-16'>Kami menyediakan layanan drone, fotografi, videografi, dan editing profesional untuk menghasilkan dokumentasi visual berkualitas tinggi bagi berbagai kebutuhan. </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              <Card
                  title='Dokumentasi Event'
                  description='Dokumentasi profesional untuk setiap momen penting. Kami menangkap suasana, detail, dan emosi acara secara rapi dan berkelas.'
                  image='/1.png'
              />
              <Card
                  title='Paket Lengkap'
                  description='Solusi all-in-one: video, foto, dan drone dalam satu paket terintegrasi untuk hasil maksimal tanpa ribet.'
                  image='/2.png'
              />
              <Card
                  title='VIdeo Company Profile'
                  description='Video strategis untuk menampilkan identitas, nilai, dan profesionalisme perusahaan Anda secara meyakinkan.'
                  image='/3.png'
              />
              <Card
                  title='Drone Aerial'
                  description='Visual udara yang luas dan sinematik untuk meningkatkan kesan premium dan eksklusif.'
                  image='/4.png'
              />
              <Card
                  title='Drone FPV'
                  description='Gerakan cepat dan dinamis untuk visual modern yang lebih hidup dan immersive.'
                  image='/5.png'
              />
              <Card
                  title='Fotografer'
                  description='Foto tajam, estetik, dan penuh makna untuk merepresentasikan kualitas brand Anda.'
                  image='/6.png'
              />
              <Card
                  title='Videografer'
                  description='Lebih dari merekam kami menyusun visual yang bercerita dan mudah dipahami.'
                  image='/7.png'
              />
              <Card
                  title='Paket Konten Reels'
                  description='Konten singkat dan menarik yang siap tayang untuk Instagram, TikTok, dan media sosial.'
                  image='/8.png'
              />
            </div>
        </div>
    </section>
  )
}

export default page