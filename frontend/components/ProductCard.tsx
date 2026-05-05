'use client';
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";

export default function ProductCard({ product }: any) {
  const { addToCart } = useCartStore();

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">

  {/* IMAGE */}
  <div className="relative overflow-hidden">
    <Image
      src={product.image}
      alt={product.name}
      width={300}
      height={300}
      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
    />

    {/* CATEGORY BADGE */}
    <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded capitalize">
      {product.category}
    </span>
  </div>

  {/* CONTENT */}
  <div className="p-4 flex flex-col gap-2">

    {/* NAME */}
    <h2 className="text-sm text-gray-500">
      {product.name}
    </h2>

    {/* DESCRIPTION */}
    <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
      {product.description}
    </h2>

    {/* PRICE */}
    <p className="text-green-600 font-bold text-lg">
      ₹{product.price}
    </p>

    {/* BUTTONS */}
    <div className="flex justify-between items-center mt-3">

      <Link href={`/product/${product.id}`}>
        <button className="text-blue-600 text-sm hover:underline">
          View Details
        </button>
      </Link>

      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 hover:bg-green-600 active:scale-95 transition text-white px-3 py-1 rounded-lg text-sm"
      >
        Add
      </button>

    </div>
  </div>
</div>
  );
}