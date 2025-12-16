"use client";

import { useState } from "react";
import {IoClose, IoMenu} from "react-icons/io5"
import Link from "next/link";
import clsx from "clsx";

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
                <ul className="flex flex-col  text-sm capitaleze p-4 mt-4 rounded-sm bg-gray-50 md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 md:border-o md:bg-transparent">
                    <li>
                        <Link
                         href="/"
                        className="block py-2 px-3 text-black  rounded-sm md:hover:bg-transparant md:p-0 md:hover:border-b"
                        >
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link
                         href="/layanan"
                        className="block py-2 px-3 text-black hover:bg-trasnparant rounded-sm md:hover:bg-transparant md:p-0 md:hover:border-b"
                        >
                        Layanan
                        </Link>
                    </li>
                    <li>
                        <Link
                         href="/pricelist"
                        className="block py-2 px-3 text-black hover:bg-transparant rounded-sm md:hover:bg-transparant md:p-0 md:hover:border-b"
                        >
                        Pricelist
                        </Link>
                    </li>
                    <li>
                        <Link
                         href="/portofolio"
                        className="block py-2 px-3 text-black hover:bg-transparant rounded-sm md:hover:bg-transparant md:p-0 md:hover:border-b"
                        >
                        Portofolio
                        </Link>
                    </li>
                    <li>
                        <Link
                         href="/contact"
                        className="block py-2 px-3 text-black hover:bg-transparant rounded-sm md:hover:bg-transparant md:p-0 md:hover:border-b"
                        >
                        Contact
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                         href="/event/perpisahan-sekolah"
                        className="block py-2 px-3 text-white hover:text-black bg-black border-amber-50 hover:bg-white font-semibold  rounded-sm md:hover:bg-transparant md:p-2 md:hover:border-b"
                        >
                        perpisahan sekolah
                        </Link>
                    </li> */}
                </ul>
            </div>
        </>
    )
}

export default Navlink