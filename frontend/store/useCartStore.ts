import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find(
            (item) => item.id === product.id
          );

          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              ),
            };
          }

          return {
            cart: [...state.cart, { ...product, qty: 1 }],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      increaseQty: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        })),

      decreaseQty: (id) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === id
                ? { ...item, qty: item.qty - 1 }
                : item
            )
            .filter((item) => item.qty > 0),
        })),
    }),
    {
      name: "cart-storage", // localStorage key
    }
  )
);

// import { create } from "zustand";

// export const useCartStore = create((set) => ({
//   cart: [],

//   // 🟢 ADD TO CART
//   addToCart: (product) =>
//     set((state) => {
//       const existing = state.cart.find(
//         (item) => item.id === product.id
//       );

//       if (existing) {
//         return {
//           cart: state.cart.map((item) =>
//             item.id === product.id
//               ? {
//                   ...item,
//                   qty: (item.qty || 1) + 1, // ✅ SAFE
//                 }
//               : item
//           ),
//         };
//       }

//       return {
//         cart: [
//           ...state.cart,
//           {
//             ...product,
//             qty: 1, // ✅ ALWAYS SET
//           },
//         ],
//       };
//     }),

//   // 🔴 REMOVE
//   removeFromCart: (id) =>
//     set((state) => ({
//       cart: state.cart.filter((item) => item.id !== id),
//     })),

//   // ➕ INCREASE
//   increaseQty: (id) =>
//     set((state) => ({
//       cart: state.cart.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               qty: (item.qty || 1) + 1, // ✅ SAFE
//             }
//           : item
//       ),
//     })),

//   // ➖ DECREASE
//   decreaseQty: (id) =>
//     set((state) => ({
//       cart: state.cart
//         .map((item) =>
//           item.id === id
//             ? {
//                 ...item,
//                 qty: (item.qty || 1) - 1, // ✅ SAFE
//               }
//             : item
//         )
//         .filter((item) => item.qty > 0),
//     })),

//   // 🧹 CLEAR CART (checkout ke baad kaam aayega)
//   clearCart: () => set({ cart: [] }),
// }));