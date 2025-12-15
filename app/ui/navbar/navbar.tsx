"use client";
import Logo from "../logo"
import { useState } from "react"
import { useEffect } from "react"
import Navlink from "./navlink"

const Navbar = ()  => {
      const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    // Ubah state menjadi true jika posisi scroll lebih dari 80px dari atas
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    // Tambahkan event listener saat komponen dimuat (client-side)
    window.addEventListener('scroll', changeNavbarColor);

    // Hapus event listener saat komponen dilepas (cleanup function)
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []); // Array kosong memastikan listener hanya ditambahkan sekali
    return(
        <div 
        className={`fixed top-0 w-full  shadow-sm z-20 ${
        colorChange ? 'bg-white shadow-md transition-all' : 'bg-linier-to-r from-white to-gray-700'
        }`}
        >
            <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-5">
                <Logo/>
                <Navlink/>
            </div>
        </div>
    )
}

export default Navbar