import Image from "next/image";

export default function ClientsSection() {
  return (
    <section id="client" className="py-20 bg-white">
      <div className="container max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Clients</h2>

        {/* Grid 1 = 4 logos */}
        <div className="grid grid-cols-2  sm:grid-cols-4 gap-8 mb-12 items-center justify-center">
            <Image
            src="/client (1).png"
            alt="client logo"
            width={180}
            height={180}
            className="mx-auto h-24 shadow-2xl shadow-gray-500 w-auto"
            />
            <Image
            src="/client (2).png"
            alt="client logo"
            width={180}
            height={180}
            className="mx-auto h-24 shadow-2xl shadow-gray-500 w-auto"
            />
            <Image
            src="/client (3).png"
            alt="client logo"
            width={180}
            height={180}
            className="mx-auto h-24 shadow-2xl shadow-gray-500 w-auto"
            />
            <Image
            src="/client (4).png"
            alt="client logo"
            width={180}
            height={180}
            className="mx-auto shadow-2xl shadow-gray-500 h-24 w-auto"
            />
          
        </div>

        {/* Grid 2 = 5 logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
            <Image
            src="/client (1).jpg"
            alt="client logo"
            width={180}
            height={180}
            className="mx-auto shadow-2xl shadow-gray-500 h-24 w-auto"
            />
            <Image
            src="/client (2).jpg"
            alt="client logo"
            width={180}
            height={180}
            className="mx-auto shadow-2xl shadow-gray-500 h-24 w-auto"
            />
            <Image
            src="/client (3).jpg"
            alt="client logo"
            width={180}
            height={180}
            className="mx-auto shadow-2xl shadow-gray-500 h-24 w-auto"
            />
            <Image
            src="/client (5).png"
            alt="client logo"
            width={180}
            height={180}
            className="mx-auto shadow-2xl shadow-gray-500 h-24 w-auto"
            />
            <Image
            src="/client (6).png"
            alt="client logo"
            width={180}
            height={180}
            className="mx-auto shadow-2xl shadow-gray-500 h-24 w-auto"
            />
        </div>
      </div>
    </section>
  );
}
