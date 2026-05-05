
// "use client";

// import { useState } from "react";
// import { products } from "@/data/products";
// import ProductCard from "@/components/ProductCard";

// export default function ProductsPage() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("all");

//   const filteredProducts = products.filter((p) => {
//     const matchSearch = p.description
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchCategory =
//       category === "all" || p.category === category;

//     return matchSearch && matchCategory;
//   });

//   return (
//     <div className="p-4">
//       {/* 🔍 Search  */}
//        {/* <input
//         type="text"
//         placeholder="Search products..."
//         className="border p-2 w-full mb-4"
//         onChange={(e) => setSearch(e.target.value)}
//       /> */}

//       {/* 📂 Category Filter */}
//       <div className="flex gap-2 mb-4">
//         {["all", "Phone", "Laptop", "Tablet","Camera"].map((cat) => (
//           <button className={`border rounded px-3 py-1 ${category === cat ? "bg-blue-500 text-white" : ""}`}
//             key={cat}
//             onClick={() => setCategory(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* 🛒 Products */}
//       <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {filteredProducts.map((p) => (
//           <ProductCard key={p.id} product={p} />
//         ))}
//       </div>
//     </div>
//   );
// }

// with out pagination
// "use client";

// import { useSearchParams } from "next/navigation";
// import { products } from "@/data/products";
// import ProductCard from "@/components/ProductCard";

// export default function ProductsPage() {
//   const params = useSearchParams();

//   const search = params.get("search") || "";
//   const category = params.get("category") || "all";

//   const filteredProducts = products.filter((p) => {
//     const matchSearch =
//       p.name.toLowerCase().includes(search.toLowerCase()) ||
//       p.description.toLowerCase().includes(search.toLowerCase());

//     const matchCategory =
//       category === "all" ||
//       p.category.toLowerCase() === category.toLowerCase();

//     return matchSearch && matchCategory;
//   });

//   return (
//     <div className="p-4 bg-gray-950 min-h-screen text-white">

//       <h1 className="text-xl mb-4">
//         {category !== "all" ? category : "All Products"}
//       </h1>

//       <div className="grid md:grid-cols-4 gap-4">
//         {filteredProducts.map((p) => (
//           <ProductCard key={p.id} product={p} />
//         ))}
//       </div>

//     </div>
//   );
// }



"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const params = useSearchParams();

  const search = params.get("search") || "";
  const category = params.get("category") || "all";

  // 🔍 FILTER
  const filteredProducts = products.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());

    const matchCategory =
      category === "all" ||
      p.category.toLowerCase() === category.toLowerCase();

    return matchSearch && matchCategory;
  });

  // 📄 PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // 🧠 PAGINATED DATA
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="p-6 bg-gray-950 min-h-screen text-white">

      {/* TITLE */}
      <h1 className="text-2xl font-bold mb-6 capitalize">
        {category !== "all" ? category : "All Products"}
      </h1>

      {/* PRODUCTS GRID */}
      <div className="grid md:grid-cols-4 gap-6">
        {currentProducts.length > 0 ? (
          currentProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))
        ) : (
          <p className="text-gray-400">No products found 😢</p>
        )}
      </div>

      {/* 🔢 PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">

          {/* PREV */}
          <button
            onClick={() => setCurrentPage((p) => p - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-800 rounded disabled:opacity-40"
          >
            Prev
          </button>

          {/* PAGE NUMBERS */}
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-green-500 text-black"
                  : "bg-gray-800"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {/* NEXT */}
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-800 rounded disabled:opacity-40"
          >
            Next
          </button>

        </div>
      )}

    </div>
  );
}