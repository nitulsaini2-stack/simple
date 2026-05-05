// "use client";

// import { useCartStore } from "@/store/useCartStore";
// import Image from "next/image"; 

// export default function CartItems() {
//   const { cart } = useCartStore();

//   return (
//     <div>
//       {cart.map((item: any, i: number) => (
//         <div key={i}>
//           <Image src={item.image} alt={item.title} width={100} height={100} />
//           {item.title} - ₹{item.price}
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";

export default function CartItems() {
  const { cart } = useCartStore();

  if (cart.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-500">
        🛒 Your cart is empty
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      {cart.map((item: any, i: number) => (
        <div
          key={i}
          className="flex items-center gap-4 border p-4 rounded-lg shadow-sm hover:shadow-md transition"
        >
          {/* Image */}
          <div className="relative w-20 h-20">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover rounded"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="font-semibold text-lg">{item.title}</h2>
            <p className="text-gray-600">₹{item.price}</p>
          </div>

          {/* Action */}
          <button
            className="text-red-500 hover:underline text-sm"
            onClick={() => alert("Remove feature next step 😎")}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}