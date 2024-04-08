"use client";

import { MdClose } from "react-icons/md";
import logo from "../../public/logo/logo.png";

import Image from "next/image";
import Link from "next/link";

export default function MobileNav() {
  function close() {
    document.getElementById("mobileMenu").style.width = "0px";
  }

  return (
    <div
      id="mobileMenu"
      className="fixed w-0 h-[100dvh] top-0 right-0 z-10 bg-neutral-800 transition-all ease-in-out duration-200 py-3 overflow-hidden text-neutral-200"
    >
      <button onClick={close} className="block w-fit ml-auto mr-5">
        <MdClose size={30} />
      </button>

      <div className="mt-10 flex flex-col items-center gap-20">
        <Link href={"/"}>
          <Image src={logo} width={120} alt="logo" />
        </Link>

        <div className="flex flex-col gap-4 items-center">
          <Link className="hover:underline" href={"/services"}>
            Services
          </Link>
          <Link className="hover:underline" href={"/about"}>
            About Us
          </Link>
          <Link className="hover:underline" href={"/projects"}>
            Projects
          </Link>
          <Link className="hover:underline" href={"/blogs"}>
            Blogs
          </Link>
        </div>

        <Link className="px-3 py-2 bg-neutral-600 rounded-lg" href={"/contact"}>
          Contact us
        </Link>
      </div>
    </div>
  );
}
