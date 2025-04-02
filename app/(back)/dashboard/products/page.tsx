import dynamic from "next/dynamic";

const Products = dynamic(() => import("@/components/Dashboard/Products/Products"), {
  ssr: false,
});
import React from "react";

export default function page() {
  return (
    <div className="py-6">
      <Products />
    </div>
  );
}
