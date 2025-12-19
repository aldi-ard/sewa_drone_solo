import Link from "next/link"

type PricingCardProps = {
  title: string
  price?: string
  benefits: string[]
  defaultTab?: string
  jenis? :string
}

export default function PricingCard({
  title,
  price,
  benefits,
  jenis
}: PricingCardProps) {
  return (
    <div className="w-full max-w-80 min-h-30 rounded-2xl border bg-white p-6 shadow-sm flex flex-col gap-4">
      <div className="bg-gray-100 rounded-md  flex flex-col gap-4  p-6">
      {/* Title */}
        <h3 className="text-xl font-medium capitalize">
          {title}
        </h3>
        <h3 className="text-2xl font-bold">
          {price}
        </h3>
      </div>
      {/* Benefit list */}
      <ul className="flex flex-col gap-2 text-sm text-gray-600">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-green-500">✓</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="mt-auto text-center">
        <Link
        className="h-full w-full bg-fuchsia-500 rounded-md"
        href={`https://wa.me/6288802074999?text=Hai%20kak%2C%20aku%20mau%pesen%20nih%21%20Ini%20detailnya%3A%0A%0ANama%3A%20%5BNama%20Aku%5D%0APaket%3A%20${title}%0ATujuan%20%2F%20Lokasi%3A%20%5BLokasi%20pengambilan%20gambar%5D%0ATanggal%3A%20%5BTanggal%20kegiatan%5D%0A%0AMasih%20tersedia%20nggak%2C%20kak%3F%20Kalau%20ada%20rekomendasi%20lain%2C%20boleh%20banget%20ya.%20Thanks%20banget%20sebelumnya%20%F0%9F%98%8A`}
        >
          <h1 className="capitalize font-semibold bg-fuchsia-500 py-2.5 rounded-md text-white">Kontak kami</h1>
        </Link>
      </div>

    </div>
  )
}