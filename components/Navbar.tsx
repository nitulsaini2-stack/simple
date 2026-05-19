
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/program" },
    { name: "Membership", path: "/membership" },
    { name: "Trainers", path: "/trainer" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md text-white border-b border-gray-800 z-50">
      <div className="w-full flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold tracking-[3px]">
          IRON<span className="text-red-500">CORE</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[2px] font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`transition duration-300 hover:text-red-500 ${
                  pathname === link.path ? "text-red-500" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Button */}
          <Link
            href="/membership"
            className="hidden sm:flex bg-red-500 hover:bg-red-600 px-5 py-2 rounded-full font-semibold transition duration-300"
          >
            Join Now
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4">
          <ul className="flex flex-col gap-4 text-lg">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  
  );
}
