"use client";

import { useCartStore } from "@/store/useCartStore";

export default function AddToCartButton({ product }: any) {
  const { addToCart } = useCartStore();

  return (
    <button
      onClick={() => addToCart(product)}
        className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg font-semibold"
    >
      Add to Cart
    </button>
  );
}