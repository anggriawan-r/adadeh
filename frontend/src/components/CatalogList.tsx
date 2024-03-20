import React from "react";
import ProductCard from "./card/ProductCard";
import { products } from "@/lib/constants";
import { twJoin } from "tailwind-merge";

export default function CatalogList({ className }: { className?: string }) {
  return (
    <div className={twJoin("grid grid-cols-2 gap-4 md:grid-cols-3", className)}>
      {products.map((item, index) => (
        <ProductCard key={index} data={item} />
      ))}
    </div>
  );
}
