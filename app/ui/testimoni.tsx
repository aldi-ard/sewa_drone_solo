"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import TestimonialCard from "./cards/testimoniCard";


const testimonials = [
  {
    name: "Ardiansah",
    role: "Video Traveling",
    imageProfile : "/profile/1.png" ,
    message:
      "Timnya ramah banget dan hasil videonya bikin acara desa kami jadi kelihatan mewah.",
  },
  {
    name: "Fajar",
    role: "Ketua KKN UGM",
    imageProfile : "/profile/1.png" ,
    message:
    "Pengambilan gambarnya rapi, cinematic, dan cepat proses editingnya.",
  },
  {
    name: "Mbak Intan",
    role: "Wedding Client",
    imageProfile : "/profile/1.png" ,
    message:
    "Dari lamaran sampai nikahan selalu puas. Recommended banget!",
  },
  {
    name: "Chintya Amanda",
    role: "Video traveling",
    imageProfile : "/profile/1.png" ,
    message:
      "Timnya ramah banget dan hasil videonya bikin acara desa kami jadi kelihatan mewah.",
  },
  {
    name: "Dwijaya R",
    role: "Komunitas Kreatif",
    imageProfile : "/profile/1.png" ,
    message:
      "Bukan cuma vendor, tapi partner yang enak diajak diskusi.",
  },
  {
    name: "Yusuf",
    role: "UMKM Jogja",
    imageProfile : "/profile/1.png" ,
    message:
      "Konten drone-nya bantu banget buat promosi usaha kami.",
  },
  {
    name: "Bagus",
    role: "Konten Kreator",
    imageProfile : "/profile/1.png" ,
    message:
      "Kualitas video oke bangt buat konten",
  },
  {
    name: "Mykael",
    role: "Evemnt Wedding",
    imageProfile : "/profile/1.png" ,
    message:
      "Dokumentasi pernikahan yang all role oke banget",
  },
  {
    name: "Shella",
    role: "Petugas Pemetaan",
    imageProfile : "/profile/1.png" ,
    message:
      "Hasil gambar dari dronenya jelas banget, cocok buat pemetaan",
  },
];

export default function TestimoniPage() {
  return (
    <section className="relative bg-fuchsia-500 max-h-1/6 py-14 overflow-hidden">
      {/* GRADIENT KIRI */}
      <div className="pointer-events-none absolute left-0 top-0 h-full   w-12 md:w-48  bg-linear-to-r from-fuchsia-400 to-transparent z-10" />
      {/* GRADIENT KANAN */}
      <div className="pointer-events-none absolute right-0 top-0 h-full   w-12 md:w-48  bg-linear-to-l from-fuchsia-400 to-transparent z-10" />

      <div className="max-w-8xl mx-auto md:px-20 px-20">
        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Apa Kata Klien Kami
          </h2>
          <p className="text-white mt-3">
            Testimoni dari klien yang telah menggunakan jasa kami
          </p>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.2}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 1},
            480: {slidesPerView: 1, spaceBetween: 1 },
            640: { slidesPerView: 3 , spaceBetween: 20},
            1024: { slidesPerView: 4, spaceBetween: 45},
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}