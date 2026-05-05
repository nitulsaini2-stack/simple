"use client";

import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart, Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { products } from "@/data/products";

export default function Navbar() {
  const { cart } = useCartStore();
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);

  const categories = ["Phone", "Laptop", "Tablet", "Camera"];

  const handleSearch = () => {
    router.push(`/product?search=${searchText}`);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950 text-white shadow-md">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          My <span className="text-red-500">E-Com</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8 ml-auto mr-6">
          {/* Search Icon */}
          <button onClick={() => setShowSearch(!showSearch)}>
            {/* <Search size={20} /> */}
            {showSearch ? <X size={20} /> : <Search size={20} />}
          </button>
          <Link href="/">Home</Link>
          <Link href="/product">Products</Link>
          {/* <Link href="/category">Category</Link> */}
          {/* CATEGORY DROPDOWN */}
          {/* <Link href="/products?category=phone">Phone</Link>
<Link href="/products?category=laptop">Laptop</Link>
<Link href="/products?category=camera">Camera</Link> */}

          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="hover:text-gray-300">Category ▾</button>

            {open && (
              <div className="absolute top-full mt-2 bg-gray-900 rounded-lg shadow-lg w-40">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/product?category=${cat}`}
                    className="block px-4 py-2 hover:bg-gray-800 capitalize"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about">About</Link>

          {/* Cart */}
          <Link href="/cart" className="relative flex items-center">
            <ShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* SEARCH BAR INSIDE NAV */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          showSearch ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4">
          {/* <input
           <Search size={20} className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400" /> 
            type="text"
            placeholder="Search products..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 text-white outline-none"
          /> */}

          <div className="relative w-full">

  {/* 🔍 ICON */}
  <Search
    size={20}
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
  />

  {/* INPUT */}
  <input
    type="text"
    placeholder="Search products..."
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    className="w-full pl-10 pr-3 py-3 rounded bg-gray-800 text-white outline-none focus:ring-2 focus:ring-green-500"
  />

</div>
          <button
            onClick={handleSearch}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}
