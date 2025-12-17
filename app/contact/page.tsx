import CardSosmed from "../ui/cards/cardSosmed";
import { SiGmail, SiTiktok, SiYoutube } from "react-icons/si";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

function page() {
  return (
        <section className=' w-full h-auto p-12'>
          <div className='max-w-6xl mx-auto mt-20'>
            <div className="header w-full h-auto mx-auto ">
              <h1 className='md:text-4xl text-2xl font-extrabold text-center pb-5'>Social Media</h1>
              <p className='text-shadow-gray-800 md:mx-40 font-extralight text-center pt-2 sm:mx-24 text-sm md:text-base text-balance mb-6 md:mb-4'>Kami aktif di berbagai social media, jika anda tetarik dengan jasa kami atau ingin berkomunikasi lebih lanjut silahkan hubungi kami melalui media sosial di bawah ini ✌️</p>
            </div>
            <div className="text- w-full flex md:flex-row flex-col flex-wrap items-center md:mt-12 mt-4 justify-around text-6xl border-t-gray-400 md:pt-12 border-t">
                <CardSosmed
                  logo = {<FaWhatsapp/>}
                  description = "hubungi kami melalui wa untuk respon yang lebih cepat"
                  title = "Whatsapp"
                  color="text-green-500"
                  bgcolor="bg-green-600"
                  link="https://wa.me/6288802074999"
                  cta="kirim pesan"
                />
                <CardSosmed
                  logo = {<FaInstagram/>}
                  description = "kunjungi instagram kami untuk melihat berbagai karya kami"
                  title = "Instagram"
                  color="text-pink-500"
                  bgcolor="bg-pink-600"
                  link="https://www.instagram.com/drone_solo/"
                  cta="lihat instagram"
                />
                <CardSosmed
                  logo = {<SiTiktok/>}
                  description = "lihat berbagai hasil project kami di tiktok"
                  title = "tiktok"
                  color="text-black"
                  bgcolor="bg-black"
                  link="https://www.tiktok.com/@drone_solo"
                  cta="kunjungi tiktok"
                />
                <CardSosmed
                  logo = {<SiYoutube/>}
                  description = "untuk hasil dengan durasi yang panjang, semua kami update ke youtube"
                  title = "tiktok"
                  color="text-red-500"
                  bgcolor="bg-red-500"
                  link="https://www.youtube.com/@drone_solo_"
                  cta="subscribe"
                />
            </div>
           
          </div>
        </section>
  )
}

export default page