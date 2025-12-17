export default function TestimoniSection() {
  return (
    <div className="py-20 bg-white ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Testimoni Klien
        </h2>
        <div className="grid md:grid-cols-3  mx-auto gap-6 bg-b">
          <blockquote className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow border border-gray-100 animate-fade-up ">
            <p className="text-gray-700 mb-4">
              “Pelayanan terbaik! Hasil drone footage sangat stabil dan premium.”
            </p>
            <footer className="font-semibold text-gray-900">
              Rizky • Event Organizer
            </footer>
          </blockquote>

          <blockquote className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow border border-gray-100 animate-fade-up  delay-150">
            <p className="text-gray-700 mb-4">
              “Tim responsif dan profesional. Cocok untuk kebutuhan perusahaan.”
            </p>
            <footer className="font-semibold text-gray-900">
              Dewi • PT Citra
            </footer>
          </blockquote>

          <blockquote className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow border border-gray-100 animate-fade-up delay-300">
            <p className="text-gray-700 mb-4">
              “Harga ramah tapi kualitas kelas atas!”
            </p>
            <footer className="font-semibold text-gray-900">
              Fahmi • Alumni Smk Mandhala Bakti
            </footer>
          </blockquote>
          <blockquote className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow border border-gray-100 animate-fade-up delay-300">
            <p className="text-gray-700 mb-4">
              “ngebantu banget buat bikin iklan umkm!”
            </p>
            <footer className="font-semibold text-gray-900">
              husna • UMKM
            </footer>
          </blockquote>
          <blockquote className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow border border-gray-100 animate-fade-up delay-300">
            <p className="text-gray-700 mb-4">
              “pilihan cocok buat prewed sampe wedding sekaligus!”
            </p>
            <footer className="font-semibold text-gray-900">
              dea chintya 
            </footer>
          </blockquote>
          <blockquote className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow border border-gray-100 animate-fade-up delay-300">
            <p className="text-gray-700 mb-4">
              “traveling jadi lebih nyaman tanpa mikir dukomentasi!”
            </p>
            <footer className="font-semibold text-gray-900">
              Ardi 
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
