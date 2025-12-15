import Card from './cards/cardLayanan'

function Layanan() {
  return (
    <section className=' w-full h-auto p-12 bg-gray-100'>
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-center uppercase font-extrabold text-4xl mt-6 mb-9'>Layanan Kami</h2>
            <p className='text-shadow-gray-800 md:mx-40 font-extralight text-center sm:mx-24 text-balance mb-16'>Kami menyediakan layanan shoot drone, videografer, dan fotografer profesional dengan hasil dokumentasi berkualitas tinggi untuk berbagai acara, mulai dari pernikahan, event dan gathering, konten periklanan, dokumentasi proyek konstruksi, hingga profil perusahaan. </p>
            <div className="flex flex-col md:flex-row sm:flex-wrap w-full sm:gap-0  h-auto pt-8 items-center mx-auto justify-around ">
              <Card
                  title='Sewa Drone'
                  description='dengan dukungan operator berpengalaman, kami siap membantu menangkap gambar dan video dari perspektif udara, baik untuk survei lahan, pemetaan, maupun produksi konten visual. Setiap hasil dokumentasi drone kami memiliki detail yang tajam dan kualitas sinematik, cocok untuk proyek skala besar maupun kecil.'
                  image='/drone3d.png'
              />
              <Card
                  title='Dokumentasi Event'
                  description='Percayakan dokumentasi acara atau proyek penting Anda kepada tim profesional kami. Dengan shoot drone, videografi, dan fotografi berkualitas dan pengalaman dalam menangani berbagai event, kami menghadirkan dokumentasi berkelas dan mampu mencerminkan profesionalisme acara.'
                  image='/dokumentasi-preview.png'
              />
              <Card
                  title='Vidio Editing'
                  description='Lengkapi dokumentasi Anda dengan layanan editing video profesional yang menghadirkan hasil akhir yang rapi, dinamis, dan siap tayang. Tim editor kami berpengalaman dalam menyusun alur cerita, menambahkan efek visual, transisi, dan musik yang sesuai, sehingga setiap momen tampil lebih menarik dan berkesan.'
                  image='/video-editing.png'
              />
            </div>
        </div>
    </section>
  )
}

export default Layanan