import Link from "next/link"
import WhatsAppButton from "../forms/FormWa"

const Footer = () => {
    return(
        <footer className="bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 w-full py-10 md:py-16">
            <div className="grid md:grid-cols-3 gap-7">
                <div className="">
                    <Link href="/" className="mb-10 block">
                        <h1 className="text-white font-extrabold text-2xl">Drone Solo</h1>
                    </Link>
                    <p className="text-gray-400">
                        bukan sekedar file dengan format jpeg atau m4, tapi bagaimana kita menyimpan momen, setiap perjalan hidup kita, setiap tawa yang menyapa, setiap rasa yang tersisa, yang belum tentu kita ulang, saat semua telah usang
                    </p>
                </div>
                <div className="">
                    <div className="flex gap-20 ">
                        <div className="flex-1 md:flex-none">
                            <h4 className="mb-8 text-xl font-semibold text-white">Links</h4>
                            <ul className="list-item space-y-5 text-gray-400">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/layanan">Layanan</Link>
                                </li>
                                <li>
                                    <Link href="/pricelist">Pricelist</Link>
                                </li>
                                <li>
                                    <Link href="/portofolio">Portofolio</Link>
                                </li>
                                <li>
                                    <Link href="/Contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 md:flex-none">
                            <h4 className="mb-8 text-xl font-semibold text-white">More</h4>
                            <ul className="list-item space-y-5 text-gray-400">
                                <li>
                                    <Link href="https://drive.google.com/file/d/1U11NA2uUxwLngG5NSmOAwBlt95Igi9pJ/view">Perpisahan Sekolah</Link>
                                </li>
                                <li>
                                    <Link href="https://wa.me/6288802074999">Whatsapp</Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/drone_solo/">Instagram</Link>
                                </li>
                                <li>
                                    <Link href="https://www.tiktok.com/@drone_solo">Tiktok</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h4 className="mb-8 text-xl font-semibold text-white">Contact</h4>
                    <p className="text-gray-400">
                        kirim pesan langsung ke whatsapp kami
                    </p>
                    <WhatsAppButton/>
                </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 border-t border-gray-500 py-8 text-center text-base capitaleze text-gray-500">
            &copy; Copyright 2025 | dronesolo x konektastudio | All Right reserved
          </div>
        </footer>
    )
}

export default Footer