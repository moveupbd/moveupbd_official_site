"use client";

import Image from "next/image";

import logo from "../../public/logo/logo.png";
import Link from "next/link";

import { MdMenu } from "react-icons/md";
import MobileNav from "./MobileNav";

export default function Navbar() {
  function open() {
    document.getElementById("mobileMenu").style.width = "100%";
  }

  return (
    <div className="bg-neutral-800 text-neutral-200 py-2">
      <MobileNav />
      <div className="container flex items-center justify-between text-sm">
        <Link href={"/"}>
          <Image src={logo} width={100} alt="logo" />
        </Link>

        <div className="hidden md:block space-x-5">
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

        <Link
          className="hidden md:block px-3 py-2 bg-neutral-600 rounded-lg"
          href={"/contact"}
        >
          Contact us
        </Link>

        <button onClick={open}>
          <MdMenu size={28} />
        </button>
      </div>
    </div>
  );
}
