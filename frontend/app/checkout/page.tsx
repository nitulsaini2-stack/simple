// "use client";

// import { useState, useEffect } from "react";
// import { useCartStore } from "@/store/useCartStore";

// export default function CheckoutPage() {

//   const { cart } = useCartStore();

//   const [form, setForm] = useState({
//     name: "",
//     address: "",
//     city: "",
//     phone: "",
//   });

//   // ✅ DEBUG
//   useEffect(() => {
//     console.log("Cart Data 👉", cart);
//   }, [cart]);

//   const itemsCount = cart.reduce(
//     (acc, item) => acc + (item.qty || 1),
//     0
//   );

//   const subtotal = cart.reduce(
//     (acc, item) => acc + item.price * (item.qty || 1),
//     0
//   );

//   const delivery = cart.length > 0 ? 50 : 0;
//   const total = subtotal + delivery;

//   const handleOrder = () => {
//     if (!form.name || !form.address || !form.city || !form.phone) {
//       alert("Fill all details ❗");
//       return;
//     }

//     if (cart.length === 0) {
//       alert("Cart empty 🛒");
//       return;
//     }

//     alert("Order placed 🎉");
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 text-white p-6">
//       <h1 className="text-3xl font-bold mb-6">Checkout</h1>

//       <div className="grid lg:grid-cols-2 gap-8">

//         {/* LEFT */}
//         <div className="bg-gray-900 p-6 rounded-lg space-y-4">
//           <input
//             placeholder="Full Name"
//             value={form.name}
//             onChange={(e) =>
//               setForm({ ...form, name: e.target.value })
//             }
//             className="w-full p-3 bg-gray-800 rounded"
//           />
//         </div>

//         {/* RIGHT */}
//         <div className="bg-gray-900 p-6 rounded-lg">

//           {cart.length === 0 ? (
//             <p>No items 🛒</p>
//           ) : (
//             cart.map((item) => (
//               <div key={item.id} className="flex justify-between">
//                 <span>{item.name}</span>
//                 <span>₹{item.price * item.qty}</span>
//               </div>
//             ))
//           )}

//           <div className="mt-4">
//             <p>Items: {itemsCount}</p>
//             <p>Subtotal: ₹{subtotal}</p>
//             <p>Delivery: ₹{delivery}</p>
//             <p className="font-bold">Total: ₹{total}</p>
//           </div>

//           <button onClick={handleOrder}>
//             Place Order
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";

export default function CheckoutPage() {

  const { cart } = useCartStore();

  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
  });
  console.log("order details",form)

  // ✅ DEBUG
  useEffect(() => {
    console.log("Cart Data 👉", cart);
  }, [cart]);

  // 📊 CALCULATIONS
  const itemsCount = cart.reduce(
    (acc, item) => acc + (item.qty || 1),
    0
  );

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );

  const delivery = cart.length > 0 ? 50 : 0;
  const total = subtotal + delivery;

  // 🚀 ORDER
  const handleOrder = () => {
    if (!form.name || !form.address || !form.city || !form.phone) {
      alert("Please fill all details ❗");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty 🛒");
      return;
    }

    alert("Order placed successfully 🎉");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Checkout
      </h1>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* 🧾 LEFT - SHIPPING */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">

          <h2 className="text-xl font-semibold text-green-400 mb-2">
            Shipping Details
          </h2>

          <input
            placeholder="Full Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-3 bg-gray-800 rounded outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            placeholder="Address"
            value={form.address}
            onChange={(e) =>
              setForm({ ...form, address: e.target.value })
            }
            className="w-full p-3 bg-gray-800 rounded outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            placeholder="City"
            value={form.city}
            onChange={(e) =>
              setForm({ ...form, city: e.target.value })
            }
            className="w-full p-3 bg-gray-800 rounded outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            className="w-full p-3 bg-gray-800 rounded outline-none focus:ring-2 focus:ring-green-500"
          />

        </div>

        {/* 💳 RIGHT - SUMMARY */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">

          <h2 className="text-xl font-semibold text-green-400 mb-4">
            Order Summary
          </h2>

          {/* 🛒 ITEMS */}
          <div className="space-y-3 mb-5 max-h-60 overflow-y-auto pr-2">

            {cart.length === 0 ? (
              <p className="text-gray-400">No items in cart 🛒</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b border-gray-800 pb-2 text-sm"
                >
                  <span className="truncate w-40">
                    {item.name}
                  </span>

                  <span className="text-gray-400">
                    x{item.qty}
                  </span>

                  <span className="text-green-400 font-semibold">
                    ₹{item.price * item.qty}
                  </span>
                </div>
              ))
            )}

          </div>

          {/* 📊 SUMMARY */}
          <div className="space-y-2 text-sm mb-4">

            <div className="flex justify-between">
              <span>Products</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between text-gray-400">
              <span>Total Items</span>
              <span>{itemsCount}</span>
            </div>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between text-gray-400">
              <span>Delivery</span>
              <span>₹{delivery}</span>
            </div>

          </div>

          {/* 💰 TOTAL */}
          <div className="flex justify-between text-lg font-bold border-t border-gray-700 pt-3 mb-5">
            <span>Total</span>
            <span className="text-green-400">
              ₹{total}
            </span>
          </div>

          {/* 🚀 BUTTON */}
          <button
            onClick={handleOrder}
            className="w-full bg-green-500 hover:bg-green-600 transition py-3 rounded-lg text-black font-bold"
          >
            Place Order
          </button>

        </div>

      </div>
    </div>
  );
}