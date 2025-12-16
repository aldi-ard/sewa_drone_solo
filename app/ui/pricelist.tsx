import PricingCard from "./cards/pricecingCard"
import Link from "next/link"

export default function PricingSection() {
  return (
    <section className="full h-auto p-12 bg-gray-100 ">
        <div className="max-w-6xl mx-auto flex gap-4 flex-col border-t pt-20">
            <h2 className="text-center uppercase font-extrabold text-4xl mt-6 mb-9">pricelist</h2>
        </div>
      <div className="max-w-6xl md:pt-10 mx-auto grid gap-6 md:grid-cols-3">
        
        <PricingCard
          title="paket wedding"
          price="Rp 2.000.000"
          benefits={[
            "1 fotografer",
            "1 videografer",
            "editing foto",
            "editing video 2 menit",
            "8 jam kerja",
            "file uploud via google drive",
          ]}
        />

        <PricingCard
          title="paket event"
          price="Rp 2.500.000"
          benefits={[
            "durasi 4 jam",
            "1 drone pilot",
            "1 fotografer",
            "video dari drone dan kamera",
            "file updloud di google drive",
            "editing video",
          ]}
        />

        <PricingCard
          title="paket vidiografer"
          price="Rp 1.000.000"
          benefits={[
            "1 videogrfer",
            "1 drone pilot",
            "4jam dokumentasi",
            "video edit 2 menit",
            "semua video bisa di copy"
          ]}
        />

      </div>
      <div className="max-w-6xl mx-auto items-center flex mt-16 ">
        <button className="mx-auto bg-black md:py-6 md:px-8 capitalize  py-2 px-4 rounded-4xl font-semibold text-white hover:bg-blue-600 hover:shadow-md">
            <Link href="/pricelist" className="h-full w-full">pricelist lengkap</Link>    
        </button>
      </div>
    </section>
  )
}