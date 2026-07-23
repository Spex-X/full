"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import OptimizedImage from "@/components/OptimizedImage";
import { getImageUrl } from "@/lib/imageUrls";

export default function Page29() {
  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();

  const images = [
    getImageUrl("/images/antesdeposi1.jpeg"),
    getImageUrl("/images/antesdepois2.jpeg"),
    getImageUrl("/images/antesdeposi3.jpeg")
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        if (prev === images.length - 1) {
          router.push("/page30");
          return prev;
        }
        return prev + 1;
      });
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600">
      <div className="container mx-auto px-4 py-8 max-w-md">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-white mb-2">
            CALISTENIA
          </h1>
        </div>

        {/* Test Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-6">
          <div className="text-center mb-4">
            <div className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-3">
              TESTE DE 1 MINUTO
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Aguarde, estamos criando seu plano personalizado
            </h2>
          </div>

          {/* Slideshow */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
              <OptimizedImage
                src={images[currentImage]}
                alt={`Antes e depois ${currentImage + 1}`}
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mb-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage ? "bg-pink-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white/50"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
