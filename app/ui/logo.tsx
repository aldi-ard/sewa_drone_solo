import Link from "next/link"
import Image from "next/image"
const Logo = () => {
    return(
        <Link href="/" className="flex items-center gap-2">
            <Image alt="logodronesolo" width="36" height="36" src='/logodrone.png' className=""></Image>
            <h1 className="text-black font-extrabold text-2xl">Drone Solo</h1>
        </Link>
    )
}

export default Logo