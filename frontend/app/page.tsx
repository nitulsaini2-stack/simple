// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen gap-4">
//       <h1 className="text-3xl font-bold">My E-commerce</h1>

//       <Link href="/products">
//         <button className="bg-blue-500 text-white px-4 py-2">
//           Go to Products
//         </button>
//       </Link>
//     </div>
//   );
// }
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center text-center min-h-screen">

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Welcome to{" "}
          <span className="text-green-400">My E-Commerce</span>
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-400 mt-4 max-w-xl">
          Shop the latest Phones, Laptops, Tablets and Cameras at the best prices.
          Fast delivery, best deals and premium quality.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex gap-4 mt-8">

          <Link href="/">
            <button className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-lg font-semibold">
              Shop Now
            </button>
          </Link>

          <Link href="/product">
            <button className="border border-gray-600 hover:bg-gray-800 transition px-6 py-3 rounded-lg">
              Explore Categories
            </button>
          </Link>

        </div>

        {/* FEATURE BOXES */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 w-full">

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-lg font-semibold text-green-400">Fast Delivery</h3>
            <p className="text-gray-400 text-sm mt-2">
              Get your products delivered within days.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-lg font-semibold text-green-400">Best Prices</h3>
            <p className="text-gray-400 text-sm mt-2">
              Competitive pricing on all products.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-lg font-semibold text-green-400">Secure Shopping</h3>
            <p className="text-gray-400 text-sm mt-2">
              Safe and trusted checkout experience.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}