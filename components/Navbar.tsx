"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Moon, Wallet } from "lucide-react";
import { Button } from "./ui/button";

const logo = "/assets/images/logo.jpeg";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { label: "Jobs", url: "/Jobs" },
    { label: "Talents", url: "/Talents" },
    { label: "How it works", url: "/HowItWorks" },
    { label: "About", url: "/About" },
  ];

  return (
    <nav className="w-full bg-[#001219] flex justify-between items-center py-3 px-[8%]">
      <Link href="/" >
       <div className="flex items-center gap-3">
        <Image src={logo} alt="logo" height={120} width={120} className="h-8 w-8" />
        <h1 className="text-white text-xl font-semibold">StarkHive</h1>
      </div></Link>

      <div className="flex items-center gap-6">
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link
                href={navLink.url}
                className={`cursor-pointer text-[#94A3B8] hover:text-white transition-colors text-base ${
                  pathname === navLink.url ? "text-white font-semibold " : ""
                }`}
              >
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="text-white mx-4" aria-label="Toggle dark mode">
          <Moon size={20} />
        </button>

        <Button className="bg-teal-500 hover:bg-white hover:text-teal-500 transition duration-300 ease-in-out flex items-center gap-2">
          <Wallet size={18} />
          Connect Wallet
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
