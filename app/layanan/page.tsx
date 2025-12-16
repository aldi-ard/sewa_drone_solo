import Card from "../ui/cards/cardLayanan"

function page() {
  return (
    <section className=' w-full h-auto p-12 bg-gray-100'>
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-center uppercase font-extrabold md:text-4xl text-3xl mt-24 mb-9'>Layanan Kami</h2>
            <p className='text-shadow-gray-800 md:mx-40 font-extralight text-center sm:mx-24 text-sm md:text-base text-balance mb-6 md:mb-16'>Kami menyediakan layanan shoot drone, videografer, dan fotografer profesional dengan hasil dokumentasi berkualitas tinggi untuk berbagai acara, mulai dari pernikahan, event dan gathering, konten periklanan, dokumentasi proyek konstruksi, hingga profil perusahaan. </p>
            <div className="flex flex-col md:flex-row sm:flex-wrap w-full sm:gap-0 md:justify-center h-auto pt-8 items-center mx-auto md:gap-8 flex-wrap">
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
                  title='Iklan Sosial Media'
                  description='Tingkatkan kualitas branding Anda dengan konten visual yang menarik perhatian. Kami menawarkan layanan foto dan video khusus untuk sosial media dan iklan, memberikan hasil yang kreatif dan berkualitas tinggi untuk memperkuat daya tarik bisnis Anda di mata pelanggan.'
                  image='/vidiomarketing.jpg'
              />
              <Card
                  title='Dokumentasi Pernikahan'
                  description='Abadikan momen indah pernikahan Anda dengan jasa dokumentasi kami! Tim profesional kami siap menghadirkan hasil yang dramatis dan sinematik. Jadikan hari istimewa Anda berkesan dengan dokumentasi berkualitas yang bisa dikenang selamanya. Hubungi kami untuk detail lebih lanjut.'
                  image='/wedding.jpg'
              />
              <Card
                  title='Pemetaan & Survey Lahan'
                  description='Menghasilkan akurasi dan efisiensi untuk perencanaan proyek konstruksi, pengukuran lahan, dan pengolahan data yang presisi. Kami menghasilkan peta dan visualisasi lahan yang detail. Sesuai untuk Anda yang memerlukan data cepat, akurat, dan hemat biaya dibandingkan metode pemetaan konvensional.'
                  image='/DroneMapping.jpg'
              />
              <Card
                  title='Dokumentasi pariwisata'
                  description='Menghadirkan keindahan destinasi wisata melalui dokumentasi dengan visual yang mampu menarik perhatian. Layanan ini ideal untuk promosi destinasi wisata, konten sosial media, hingga kebutuhan dokumentasi perjalanan wisata'
                  image='/traveling.jpg'
              />
              <Card
                  title='Profil Perusahaan'
                  description='Tingkatkan kredibilitas perusahaan Anda dengan profil yang profesional dan menarik. Tim kami siap membantu membuat video profil perusahaan yang mampu menampilkan visi, misi, dan nilai-nilai bisnis Anda dengan visual yang kuat dan berkualitas tinggi.'
                  image='/companyprofile.jpg'
              />
              <Card
                  title='Editing Video Profesional'
                  description='Lengkapi dokumentasi Anda dengan layanan editing video profesional yang menghadirkan hasil akhir yang rapi, dinamis, dan siap tayang. Tim editor kami berpengalaman dalam menyusun alur cerita, menambahkan efek visual, transisi, dan musik yang sesuai, sehingga setiap momen tampil lebih menarik dan berkesan.'
                  image='/editingprofesional.jpg'
              />
            </div>
        </div>
    </section>
  )
}

export default page