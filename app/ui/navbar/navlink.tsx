"use client";

import { useState } from "react";
import {IoClose, IoMenu} from "react-icons/io5"
import Link from "next/link";
import clsx from "clsx";
import { FaWhatsapp } from "react-icons/fa6";

const Navlink = () => {
    const  [open, setOpen] = useState(false)
    return(
        <>
            <button onClick={() => setOpen(!open)} className="inline-flex items-center p-2 justify-center text-sm text-gray-500 bg-transparent raounded-md md:hidden hover:bg-tranparant">
                {!open ? <IoMenu className="size-8 text-black"/> : <IoClose className="size-8 text-black" />}
            </button>
            <div className={clsx("w-full md:block md:w-auto", {
                "hidden" : !open
            })}>
                <ul className="flex flex-col  text-sm capitaleze p-2 mt-4 rounded-sm bg-gray-50 md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 md:border-o md:bg-transparent">
                    <li>
                        <Link
                         href="/"
                        className="block py-2 px-3 text-black text-shadow-white font-bold rounded-sm md:hover:bg-transparant md:p-0 md:hover:border-b"
                        >
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link
                         href="/layanan"
                        className="block py-2 px-3 text-black font-bold hover:bg-trasnparant rounded-sm md:hover:bg-transparant md:p-0 md:hover:border-b"
                        >
                        Layanan
                        </Link>
                    </li>
                    <li>
                        <Link
                         href="/pricelist"
                        className="block py-2 px-3 text-black font-bold hover:bg-transparant rounded-sm md:hover:bg-transparant md:p-0 md:hover:border-b"
                        >
                        Pricelist
                        </Link>
                    </li>
                    <li>
                        <Link
                         href="/portofolio"
                        className="block py-2 px-3 text-black font-bold hover:bg-transparant rounded-sm md:hover:bg-transparant md:p-0 md:hover:border-b"
                        >
                        Portofolio
                        </Link>
                    </li>
                    <li>
                        <Link
                         href="/contact"
                        className="block py-2 px-3 text-black font-bold hover:bg-transparant rounded-sm md:hover:bg-transparant md:p-0 md:hover:border-b"
                        >
                        Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                         href="https://wa.me/6288802074999"
                        className="py-2 flex-row items-center font-bold bg-green-500 max-w-60 flex px-4 bg-green-00 text-white hover:bg-transparant rounded-xl gap-2 md:hover:bg-transparant md:p-4 md:hover:border-b"
                        >
                        <FaWhatsapp className="text-xl"/>
                        <p> Hubungi WhatsApp Kami</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navlink