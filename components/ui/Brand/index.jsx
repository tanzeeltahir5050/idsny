import Image from "next/image";
import Link from "next/link";
import ctaImage from "../../../public/idsny.jpg";

const Brand = () => (
    <Link href="/">
        <Image
            src={ctaImage}
            width={40}
            height={30}
            alt="Blinder logo"
        />
    </Link>
)
export default Brand