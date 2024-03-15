import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CardListProps {
  products: Product[];
}

const CardList: React.FC<CardListProps> = ({ products }) => {
  return (
    <>
      <h1 className="m-3 text-center text-3xl font-semibold">
        PRODUK TERBAIK ADADEH
      </h1>
      <div className="m-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden border-black bg-white hover:border"
          >
            <div className="relative h-0 pb-[100%]">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-2">
              <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardList;
