type PricingCardProps = {
  title: string
  price: string
  benefits: string[]
}

export default function PricingCard({
  title,
  price,
  benefits,
}: PricingCardProps) {
  return (
    <div className="w-full max-w-sm min-h-80 rounded-2xl border bg-white p-6 shadow-sm flex flex-col gap-4">
      
      {/* Title */}
      <h3 className="text-xl font-semibold text-center capitalize">
        {title}
      </h3>

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
        <p className="text-2xl font-bold">
          {price}
        </p>
        <p className="text-xs text-gray-500">
          per paket
        </p>
      </div>

    </div>
  )
}