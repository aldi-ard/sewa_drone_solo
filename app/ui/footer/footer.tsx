import Link from "next/link"

const Footer = () => {
    return(
        <footer className="bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 w-full py-10 md:py-16">
            <div className="grid md:grid-cols-3 gap-7">
                <div className="">
                    <Link href="/" className="mb-10 block">
                        <h1 className="text-white font-extrabold text-2xl">Drone Solo</h1>
                    </Link>
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius totam ullam quas voluptatibus vero.
                    </p>
                </div>
                <div className="">
                    <div className="flex gap-20 ">
                        <div className="flex-1 md:flex-none">
                            <h4 className="mb-8 text-xl font-semibold text-white">Links</h4>
                            <ul className="list-item space-y-5 text-gray-400">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/layanan">Layanan</Link>
                                </li>
                                <li>
                                    <Link href="/pricelist">Pricelist</Link>
                                </li>
                                <li>
                                    <Link href="/portofolio">Portofolio</Link>
                                </li>
                                <li>
                                    <Link href="/Contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 md:flex-none">
                            <h4 className="mb-8 text-xl font-semibold text-white">More</h4>
                            <ul className="list-item space-y-5 text-gray-400">
                                <li>
                                    <Link href="/perpisahan-sekolah">Perpisahan Sekolah</Link>
                                </li>
                                <li>
                                    <Link href="#">Whatsapp</Link>
                                </li>
                                <li>
                                    <Link href="#">Instagram</Link>
                                </li>
                                <li>
                                    <Link href="#">Email</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h4 className="mb-8 text-xl font-semibold text-white">Newsleter</h4>
                    <p className="text-gray-400">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium asperiores eaque facilis, consequatur voluptate temporibus?
                    </p>
                    <form action="" className="mt-5">
                        <div className="mb-5">
                            <input type="text" name="email" id="email" className="w-full p-3 rounded bg-white" placeholder="johndou@gmail.com"/>
                        </div>
                        <button className="bg-orange-400 p-3 font-bold text-white w-full text-center rounded-sm hover:bg-orange-500">Kirim</button>
                    </form>
                </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 border-t border-gray-500 py-8 text-center text-base capitaleze text-gray-500">
            &copy; Copyright 2025 | dronesolo x konektastudio | All Right reserved
          </div>
        </footer>
    )
}

export default Footer