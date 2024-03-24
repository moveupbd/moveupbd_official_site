import Image from "next/image";

import logo from "../../public/logo/logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-neutral-800 text-white py-3">
      <div className="container">
        <Link href={"/"}>
          <Image src={logo} width={130} alt="logo" />
        </Link>
      </div>
    </div>
  );
}
