"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Moon, Wallet, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const logo = "/assets/images/logo.jpeg";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Jobs", url: "/Jobs" },
    { label: "Talents", url: "/Talents" },
    { label: "How it works", url: "/HowItWorks" },
    { label: "About", url: "/About" },
  ];

  return (
    <nav className="w-full bg-[#001219] flex justify-between items-center py-3 px-4 md:px-[8%]">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-1 md:gap-3">
          <Image src={logo} alt="logo" height={120} width={120} className="h-8 w-8" />
          <h1 className="text-white text-xl font-semibold">StarkHive</h1>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-6">
        <ul className="flex items-center gap-7">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link
                href={navLink.url}
                className={`cursor-pointer text-[#94A3B8] hover:text-white transition-colors text-base ${
                  pathname === navLink.url ? "text-white font-semibold" : ""
                }`}
              >
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button className="text-white mx-4" aria-label="Toggle dark mode">
          <Moon size={20} />
        </button>

        {/* Wallet Button */}
        <Button className="bg-teal-500 hover:bg-white hover:text-teal-500 transition duration-300 ease-in-out flex items-center gap-2">
          <Wallet size={18} />
          Connect Wallet
        </Button>
      </div>

      {/* Mobile Controls: Menu + Theme Toggle */}
      <div className="flex items-center gap-4 lg:hidden">
        {/* Dark Mode Toggle */}
        <button className="text-white" aria-label="Toggle dark mode">
          <Moon size={20} />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar (Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#001219] text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg flex flex-col py-6 px-8`}
      >
        {/* Close Button */}
        <button className="text-white self-end mb-6" onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>

        {/* Navigation Links */}
        <ul className="flex flex-col space-y-4">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <Link
                href={navLink.url}
                className={`text-lg ${
                  pathname === navLink.url ? "font-semibold text-teal-400" : "text-gray-300"
                }`}
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Connect Wallet Button */}
        <div className="mt-8">
          <Button className="w-full bg-teal-500 hover:bg-white hover:text-teal-500 transition duration-300 ease-in-out flex items-center gap-2">
            <Wallet size={18} />
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
