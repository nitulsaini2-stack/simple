"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  
    const categories = ["Phone", "Laptop", "Tablet", "Camera"];
  
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-green-500 text-xl font-bold mb-3">My Store</h2>
          <p className="text-sm">
            Your one-stop shop for laptops, phones, tablets, and cameras.
            Quality products at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            {/* <li><Link href="/category" className="hover:text-white">Categories</Link></li> */}
            <li><Link href="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            {/* <li><Link href="/category/laptop" className="hover:text-white">Laptop</Link></li>
            <li><Link href="/category/phone" className="hover:text-white">Phone</Link></li>
            <li><Link href="/category/tablet" className="hover:text-white">Tablet</Link></li>
            <li><Link href="/category/camera" className="hover:text-white">Camera</Link></li> */}
            {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/product?category=${cat}`}
                    className="block px-4 py-2 hover:bg-gray-800 capitalize"
                  >
                    {cat}
                  </Link>
                ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-3">Subscribe for latest updates</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="p-2 w-full text-white rounded-lg border border-gray-300"
            />
            <button className="bg-blue-500 px-4 m-2 rounded-r text-white">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
}