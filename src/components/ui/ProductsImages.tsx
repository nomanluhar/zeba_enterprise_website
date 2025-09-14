"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

const ProductImages = ({ product }: { product: any }) => {
  const [heroImage, setHeroImage] = useState(product.image);

  // pick random image only after hydration
  useEffect(() => {
    if (product.images && product.images.length > 0) {
      const randomImg =
        product.images[Math.floor(Math.random() * product.images.length)];
      setHeroImage(randomImg);
    }
  }, [product.images]);

  // filter thumbnails so hero image is excluded
  const thumbnails = useMemo(
    () => (product.images || []).filter((img: string) => img !== heroImage),
    [product.images, heroImage]
  );

  return (
    <div className="space-y-4">
      {/* Hero Image */}
      <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
        <Image
          src={heroImage}
          alt={product.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Thumbnails */}
      {thumbnails.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {thumbnails.map((image: string, index: number) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={() => setHeroImage(image)}
            >
              <Image
                src={image}
                alt={`${product.name} ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImages;
