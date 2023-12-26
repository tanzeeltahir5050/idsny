import Image from "next/image";
import Link from "next/link";

const Brand = () => (
    <Link href="/">
        <Image
            src="/idsny.jpg"
            width={40}
            height={30}
            alt="Blinder logo"
        />
    </Link>
)
export default Brand