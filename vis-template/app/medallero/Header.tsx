"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white text-black fixed top-0 w-full z-40 shadow-md">
      <div className="container mx-auto flex items-center p-4">
        <Image
          className="ml-[-50px]"
          src="/logo_par.svg"
          alt="Olympic Women Participation"
          width={45}
          height={45}
        />
        <ul className="flex space-x-8 ml-16">
          <li>
            <Link href="/" className="">
              Mujeres
            </Link>
          </li>
          <li>
            <Link href="/historia" className="text-[#5F1BBF] hover:text-[#5F1BBF]">
              Historia
            </Link>
          </li>
          <li>
            <Link
              href="/Medallero"
              className="bg-violet-100 hover:bg-violet-300 text-[#5F1BBF] rounded px-2 py-1"
            >
              Medallero
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}