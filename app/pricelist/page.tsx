import { TbBackground } from "react-icons/tb"
import PricingCard from "../ui/cards/pricecingCard"
import Link from "next/link"

export default function PricingSection() {
  return (
    <section className="full h-auto p-12 bg-gray-100 ">
        <div className="max-w-6xl mx-auto flex gap-4 flex-col pt-20">
            <h2 className="text-center uppercase font-extrabold md:text-4xl text-2xl mt-6 mb-9">pricelist</h2>
        </div>
        <div className="drone aerial max-w-6xl mx-auto border-b mb-5 pb-5">
            <h2 className="font-semibold capitalize md:text-xl text-md">paket fotografer, videografer, dan video drone</h2>
        </div>
        <div className="max-w-6xl md:pt-10 mx-auto grid gap-6 md:grid-cols-3">
            <PricingCard
            title="aerial 1"
            price="Rp 500.000"
            benefits={[
                "durasi 1 jam ",
                "maksimal pilot di lokasi 1 jam",
                "file updload di google drive",
            ]}
            />
            <PricingCard
            title="aerial 2"
            price="Rp 750.000"
            benefits={[
                "durasi 2 jam ",
                "maksimal pilot di lokasi 2 jam",
                "file updload di google drive",
            ]}
            />
            <PricingCard
            title="aerial 3"
            price="Rp 1.500.000"
            benefits={[
                "durasi 4 jam ",
                "maksimal pilot di lokasi 4 jam",
                "edit video",
                "file updload di google drive",
            ]}
            />
              <PricingCard
            title="FPV 1"
            price="Rp 1.000.000"
            benefits={[
                "2 jam",
                "1 pilot drone profesional",
                "file upload via google drive",
            ]}
            />
            <PricingCard
            title="FPV 2"
            price="Rp 1.500.000"
            benefits={[
                "4 jam",
                "1 pilot drone profesional",
                "file upload via google drive",
            ]}
            />
            <PricingCard
            title="FPV 3"
            price="Rp 2.000.000"
            benefits={[
                "8 jam",
                "1 pilot drone profesional",
                "file upload via google drive",
            ]}
            />
               <PricingCard
            title="paket fotografer 1"
            price="Rp 1.000.000"
            benefits={[
                "4 jam",
                "1 fotografer",
                "semua file upload google drive",
            ]}
            />
            <PricingCard
            title="paket fotografer 2"
            price="Rp 2.000.000"
            benefits={[
                "8 jam",
                "1 fotografer",
                "semua file upload google drive",
            ]}
            />
             <PricingCard
            title="paket Videografer 1"
            price="Rp 1.000.000"
            benefits={[
                "4 jam",
                "1 videografer",
                "semua file upload google drive",
            ]}
            />
            <PricingCard
            title="paket videografer 2"
            price="Rp 2.000.000"
            benefits={[
                "8 jam",
                "1 videografer",
                "semua file uploud google drive",
            ]}
            />
            <PricingCard
            title="Konten Reels"
            price="Rp 1.500.000"
            benefits={[
                "1 drone pilot & 1 fotografer",
                "3 jam",
                "video dari drone & iphone",
                "video edit maks 1 menit",
                "semua file uploud google drive",

            ]}
            />
            <PricingCard
            title="Company Profile"
            price="Rp 5.000.000"
            benefits={[
                "1 drone pilot, 2 videografer",
                "8 jam",
                "video dari drone & kamera",
                "lightning video",
                "video edit",
                "pengambilan video maks. 8 jam",
                "semua file dapat di copy",
            ]}
            />
            <PricingCard
            title="paket lengkap"
            price="Rp 3.500.000"
            benefits={[
                "4 jam",
                "1 drone pilot, 1 fotografer, 1 videografer",
                "video dari drone & kamera",
                "video edit",
                "semua file uploud google drive",
            ]}
            />
            <PricingCard
            title="paket event"
            price="Rp 1.500.000"
            benefits={[
                "3 jam",
                "1 drone pilot & 1 videografer",
                "video dari drone & kamera",
                "video edit",
                "semua file uploud google drive",
            ]}
            />
        </div>
        {/* <div className="drone aerial max-w-6xl mx-auto border-b mb-5 pt-10 pb-5">
            <h2 className="font-semibold capitalize text-xl">drone FPV</h2>
        </div>
        <div className="max-w-6xl md:pt-10 mx-auto grid gap-6 md:grid-cols-3">
          

        </div>
        <div className="drone aerial max-w-6xl mx-auto border-b mb-5 pt-10 pb-5">
            <h2 className="font-semibold capitalize text-xl">Fotografer & Videografer</h2>
        </div>
        <div className="max-w-6xl md:pt-10 mx-auto grid gap-6 md:grid-cols-3">
         

        </div>
        <div className="drone aerial max-w-6xl mx-auto border-b mb-5 pt-10 pb-5">
            <h2 className="font-semibold capitalize text-xl">Konten video</h2>
        </div>
        <div className="max-w-6xl md:pt-10 mx-auto grid gap-6 md:grid-cols-3">
  

        </div>
        <div className="drone aerial max-w-6xl mx-auto border-b mb-5 pt-10 pb-5">
            <h2 className="font-semibold capitalize text-xl">Paket Event</h2>
        </div>
        <div className="max-w-6xl md:pt-10 mx-auto grid gap-6 md:grid-cols-3">


        </div>

        <div className="drone aerial max-w-6xl mx-auto border-b mb-5 pt-10 pb-5">
            <h2 className="font-semibold capitalize text-xl">Paket Lengkap</h2>
        </div>
        <div className="max-w-6xl md:pt-10 mx-auto grid gap-6 md:grid-cols-3">

        </div> */}
        <div className="drone aerial max-w-6xl mx-auto border-b mb-5 pt-10 pb-5">
            <h2 className="font-semibold capitalize md:text-xl text-md">Paket Wedding</h2>
        </div>
        <div className="max-w-6xl md:pt-10 mx-auto grid gap-6 md:grid-cols-3">
            <PricingCard
            title="standard package"
            price="Rp 2.500.000"
            benefits={[
                "1 fotografer",
                "1 videograffer",
                "1 drone pilot",
                "all foto edit",
                "video edit 2 menit",
                "file upload via google drive",
                "8 jam kerja"
            ]}
            />
            <PricingCard
            title="Bronze package"
            price="Rp 3.000.000"
            benefits={[
                "1 fotografer",
                "1 videograffer",
                "1 drone pilot",
                "all foto edit",
                "cetak foto album eksklusif 4r 120 foto",
                "video edit 2 menit",
                "file upload via google drive",
                "8 jam kerja"
            ]}
            />
            <PricingCard
            title="silver package"
            price="Rp 5.000.000"
            benefits={[
                "1 fotografer",
                "1 videograffer",
                "1 pilot drone",
                "all foto edit",
                "cetak foto album eksklusif 4r 120 foto",
                "cetak wedding book 1 isi 10 sheet",
                "video reels 1 menit potrait",
                "video edit 3 menit",
                "file upload via google drive",
                "8 jam kerja"
            ]}
            />
            <PricingCard
            title="Gold package"
            price="Rp 8.000.000"
            benefits={[
                "2 fotografer",
                "2 videograffer",
                "1 pilot drone",
                "cetak foto 16RL + bingkai (3)",
                "cetak foto album eksklusif 4r 150 foto",
                "cetak wedding book 1 isi 10 sheet",
                "video reels 1 menit potrait",
                "video teaser 1 menit",
                "video edit 3 menit",
                "file upload via google drive",
                "8 jam kerja"
            ]}
            />
            <PricingCard
            title="Diamond package"
            price="Rp 10.000.000"
            benefits={[
                "2 fotografer",
                "2 videograffer",
                "1 pilot drone",
                "1 assistant lighting",
                "lighting video",
                "Background foto",
                "All foto edit",
                "cetak foto 22RL + bingkai (2)",
                "cetak foto 16RL + bingkai (5)",
                "cetak foto album eksklusif 4r 200 foto",
                "cetak wedding book 1 isi 15 sheet",
                "video reels 1 menit potrait",
                "video teaser 1 menit",
                "video edit 3 menit",
                "8 jam kerja"
            ]}
            />
            <PricingCard
            title="Pre-Wedding package"
            price="Rp 3.500.000"
            benefits={[
                "2 fotografer",
                "2 videograffer",
                "1 pilot drone",
                "1 assistant lighting",
                "lighting video",
                "Background foto",
                "All foto edit",
                "cetak foto 16RL + frame putih(laminasi cavas)",
                "1 video reels",
                "video edit 1-2 menit",
                "8 jam kerja"
            ]}
            />
            </div>
            <div className="drone aerial max-w-6xl mx-auto border-b mb-5 pt-10 pb-5">
                <h2 className="font-semibold capitalize md:text-xl text-md">Engagement Paket</h2>
                <p>bisa untuk siraman/midoreni/lamaran</p>
            </div>
            <div className="max-w-6xl md:pt-10 mx-auto grid gap-6 md:grid-cols-3">
                <PricingCard
                title="Foto"
                price="Rp 1.500.000"
                benefits={[
                    "1 fotografer",
                    "unlimited foto",
                    "cetak album foto eksklusif 4R 80 foto",
                    "upload file via google drive",
                    "8 jam kerja",
                ]}
                />
                <PricingCard
                title="Video"
                price="Rp 1.500.000"
                benefits={[
                    "1 videografer",
                    "1 video edit 1-2 menit",
                    "upload file via google drive",
                    "4 jam kerja",
                ]}
                />
            </div>
            <div className="drone aerial max-w-6xl mx-auto border-b mb-5 pt-10 pb-5">
                <h2 className="font-semibold capitalize md:text-xl text-md">Paket perpisahan sekolah</h2>
                <p className="text-xs md:text-md">untuk informasi paket perpisahan sekolah bisa decek lebih detail lewat link di bawah ini</p>
                <Link
                className="text-blue-400"
                href="https://drive.google.com/file/d/1U11NA2uUxwLngG5NSmOAwBlt95Igi9pJ/view"
                >- perpisahan sekolah -</Link>
            </div>
            <div className="max-w-6xl md:pt-10 mx-auto grid gap-6 md:grid-cols-3">
                <PricingCard
                title="Basic"
                price="Rp 2.500.000"
                benefits={[
                    "1 videografer",
                    "1 drone pilot",
                    "4 jam sesi dokumentasi",
                    "video edit 1-2 menit",
                    "file upload sosmed + google drive",
                ]}
                />
                <PricingCard
                title="Brozee"
                price="Rp 3.000.000"
                benefits={[
                    "1 videografer",
                    "1 drone pilot",
                    "8 jam sesi dokumentasi",
                    "video edit 2-3 menit",
                    "file upload sosmed + google drive",
                ]}
                />
                <PricingCard
                title="silver"
                price="Rp 3.500.000"
                benefits={[
                    "unlimited foto",
                    "1 videografer",
                    "1 fotografer",
                    "1 drone pilot",
                    "4 jam sesi dokumentasi",
                    "video edit 1-2 menit",
                    "file upload sosmed + google drive",
                ]}
                />
                <PricingCard
                title="Gold"
                price="Rp 4.000.000"
                benefits={[
                    "unlimited foto",
                    "1 videografer",
                    "1 fotografer",
                    "1 drone pilot",
                    "8 jam sesi dokumentasi",
                    "video edit 2-3 menit",
                    "file upload sosmed + google drive",
                ]}
                />
                <PricingCard
                title="Diamond"
                price="Rp 7.500.000"
                benefits={[
                    "unlimited foto",
                    "3 konten vertikal",
                    "1 videografer",
                    "1 asisten videografer",
                    "1 fotografer",
                    "1 drone pilot",
                    "1 content creator",
                    "8 jam sesi dokumentasi",
                    "video edit 2-3 menit",
                    "file upload sosmed + google drive",
                ]}
                />
                <PricingCard
                title="Platinum"
                price="Rp 5.000.000"
                benefits={[
                    "unlimited foto",
                    "3 konten vertikal",
                    "1 videografer",
                    "1 asisten videografer",
                    "1 fotografer",
                    "1 drone pilot",
                    "1 content creator",
                    "8 jam sesi dokumentasi",
                    "vendor lighting indoor outdoor",
                    "video edit 2-3 menit",
                    "file upload sosmed + google drive",
                ]}
                />
                <PricingCard
                title="Premium"
                price="Rp 10.000.000"
                benefits={[
                    "unlimited foto",
                    "3 konten vertikal",
                    "1 videografer",
                    "2 asisten videografer",
                    "1 fotografer",
                    "1 drone pilot",
                    "1 content creator",
                    "10 jam sesi dokumentasi",
                    "vendor lighting indoor outdoor",
                    "video edit 2-3 menit",
                    "file upload sosmed + google drive",
                ]}
                />
                <PricingCard
                title="Premium"
                price="Rp 15.000.000"
                benefits={[
                    "unlimited foto",
                    "3 konten vertikal",
                    "1 videografer",
                    "2 asisten videografer",
                    "1 fotografer",
                    "1 drone pilot",
                    "1 content creator",
                    "16 jam sesi dokumentasi(2 hari)",
                    "vendor lighting indoor outdoor",
                    "video edit 2-3 menit",
                    "file upload sosmed + google drive",
                ]}
                />
            </div>
            <div className="drone aerial max-w-6xl mx-auto border-b mb-5 pt-10 pb-5">
                <h2 className="font-semibold capitalize md:text-xl text-md">Paket Edit Video</h2>
            </div>
            <div className="max-w-6xl md:pt-10 mx-auto grid gap-6 md:grid-cols-3">
                <PricingCard
                title="durasi 1 menit"
                price="Rp 300.000 - 1.000.000"
                benefits={[
                    " durasi 1 menit = Rp. 300.000",
                    " durasi 2-3 menit = Rp. 500.000",
                    " durasi 4-5 menit = Rp. 750.000",
                    " durasi 5-7 menit = Rp. 1.000.000",
                ]}
                />
                </div>
    </section>
  )
}