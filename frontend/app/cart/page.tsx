"use client";

import { useCartStore } from "@/store/useCartStore";

export default function CartPage() {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useCartStore();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">

      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="flex flex-col lg:flex-row gap-6">

        {/* LEFT SIDE - PRODUCTS */}
        <div className="w-full lg:w-[65%] space-y-4">

          {cart.length === 0 && (
            <p className="text-gray-400">
              Your cart is empty 🛒
            </p>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 bg-gray-900 p-4 rounded-xl border border-gray-800"
            >

              {/* IMAGE */}
              {item.image && (
                <img
                  src={item.image}
                  className="w-24 h-24 object-cover rounded"
                />
              )}

              {/* DETAILS */}
              <div className="flex-1">

                <h2 className="text-lg font-semibold">
                  {item.name || item.description}
                </h2>

                <p className="text-gray-400">
                  ₹{item.price}
                </p>

                {/* QTY */}
                <div className="flex items-center gap-3 mt-3">

                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-700"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-700"
                  >
                    +
                  </button>

                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 mt-3 hover:text-red-300 text-sm"
                >
                  Remove
                </button>

              </div>

              {/* ITEM TOTAL */}
              <div className="text-green-400 font-bold">
                ₹{item.price * item.qty}
              </div>

            </div>
          ))}

        </div>

        {/* RIGHT SIDE - SUMMARY */}
        {cart && cart.length > 0 && (
          <div className="w-full lg:w-[35%]">

            <div className="bg-gray-900 p-5 rounded-xl shadow-lg sticky top-20 border border-gray-800">

              <h2 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">
                Shopping Summary
              </h2>

              {/* ITEMS LIST */}
              <div className="space-y-3 mb-4 max-h-60 overflow-y-auto pr-2">

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center text-sm border-b border-gray-800 pb-2"
                  >

                    <span className="truncate w-32 text-gray-300">
                      {item.name}
                    </span>

                    <span className="text-gray-500 text-xs">
                      x{item.qty}
                    </span>

                    <span className="text-green-400 font-semibold">
                      ₹{item.price * item.qty}
                    </span>

                  </div>
                ))}

              </div>

              {/* TOTAL */}
              <div className="flex justify-between mb-4 text-lg font-bold">
                <span>Total</span>
                <span className="text-green-400">
                  ₹{total}
                </span>
              </div>

              {/* CHECKOUT BUTTON */}
              <a href="/checkout">
                <button className="w-full bg-green-500 hover:bg-green-600 transition py-2 rounded-lg text-black font-bold">
                  Checkout
                </button>
              </a>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}