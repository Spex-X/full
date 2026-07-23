"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import OptimizedImage from "@/components/OptimizedImage";
import { getImageUrl } from "@/lib/imageUrls";

export default function Page15() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/page16");
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-purple-600">
      <div className="container mx-auto px-4 py-8 max-w-md">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-white mb-2">
            CALISTENIA
          </h1>
          <p className="text-white/90 text-lg">
            by Atlas
          </p>
        </div>

        {/* Test Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-6">
          {/* Image */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
              <OptimizedImage
                src={getImageUrl("/images/pagina15.webp")}
                alt="Mulher motivada"
                className="rounded-2xl"
              />
            </div>
          </div>

          {/* Motivational Text */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Isso é ótimo!
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Você está pronta para seguir em frente - prepare-se para a transformação com a Calistenia Asiática.
            </p>
          </div>

          {/* Continue Button */}
          <button 
            onClick={handleContinue}
            disabled={isSubmitting}
            className="w-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 rounded-xl transition-colors duration-200"
          >
            {isSubmitting ? "Processando..." : "Continuar"}
          </button>
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
