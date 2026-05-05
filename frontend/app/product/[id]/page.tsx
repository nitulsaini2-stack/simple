// import { products } from "@/data/products";

// export default function ProductDetail({ params }: any) {
//   const product = products.find((p) => p.id === params.id);

//   if (!product) return <div>Product not found</div>;

//   return (
//     <div className="p-4">
//       <img src={product.image} className="w-60" />
//       <h1 className="text-2xl font-bold">{product.title}</h1>
//       <p>₹{product.price}</p>
//       <button className="bg-green-500 text-white p-2 mt-3">
//         Add to Cart
//       </button>
//     </div>
//   );
// }

import { products } from "@/data/products";
import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";

export default async function ProductPage({ params }: any) {
  const { id } =  await params;
const product = products.find(
  (p) => String(p.id) === String(id)
);
console.log(product);

if (!product) {
  return (
    <div className="text-white p-6 bg-gray-950 min-h-screen">
        Product not found 😢
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        {/* IMAGE */}
        <div className="bg-gray-900 p-4 rounded-xl">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full object-cover rounded-lg"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col gap-4 mt-4">

          <h1 className="text-3xl font-bold">
            {product.name}
          </h1>

          <p className="text-gray-400">
            {product.description}
          </p>

          <p className="text-green-400 text-2xl font-bold">
            ₹{product.price}
          </p>

          <p className="inline-block w-fit border border-gray-600 text-sm px-2 py-1 rounded">
  {product.category}
</p>

          <AddToCartButton product={product}  />

        </div>

      </div>
    </div>
  );
}